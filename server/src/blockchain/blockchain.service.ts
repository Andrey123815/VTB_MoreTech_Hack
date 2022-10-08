import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Axios, AxiosResponse } from 'axios';
import { Repository } from 'typeorm';
import { Wallet } from '../blockchain/entities/wallet.entity';
import { InsufficientFundsToPayFee } from './errors/insufficient-funds-to-pay-fee.error';
import { InsufficientFundsToSend } from './errors/insufficient-funds-to-send.error';

type TCreateWalletResponse = {
  privateKey: string;
  publicKey: string;
};

type TGetBalanceResponse = {
  maticAmount: number;
  coinsAmount: number;
};

type TSendMoneyRequest = {
  fromPrivateKey: string;
  toPublicKey: string;
  amount: number;
};

type TSendMoneyResponse = {
  transaction: string;
};

type TTransactionStatusResponse = {
  status: 'success' | string;
};

const TRANSACTION_MATIC_FEE = 0.00001;

const REFRESH_TRANSACTION_STATUS_TIMEOUT = 60000;

@Injectable()
export class BlockchainService {
  private axios: Axios;

  constructor(
    @InjectRepository(Wallet)
    private walletsRepository: Repository<Wallet>,
    configService: ConfigService,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axios = require('axios');
    this.axios = axios.create({
      baseURL: configService.get<string>('BLOCKCHAIN_NODE_URL'),
      headers: { Accept: 'application/json' },
    });
  }

  async createWallet(): Promise<Wallet> {
    const { data: keyPair } = await this.axios.post<TCreateWalletResponse>(
      '/v1/wallets/new',
    );

    const wallet = new Wallet();
    wallet.privtaeKey = keyPair.privateKey;
    wallet.publicKey = keyPair.publicKey;

    await this.walletsRepository.save(wallet);

    return wallet;
  }

  async sendMoney(
    walletFrom: Wallet,
    walletTo: Wallet,
    amount: number,
    currency: 'matic' | 'ruble',
  ) {
    if (walletFrom === walletTo) {
      return;
    }

    if (amount <= 0) {
      return;
    }

    if (walletFrom.maticAmount < TRANSACTION_MATIC_FEE) {
      throw new InsufficientFundsToPayFee();
    }

    if (
      (currency === 'matic' &&
        walletFrom.maticAmount + TRANSACTION_MATIC_FEE < amount) ||
      (currency == 'ruble' && walletFrom.rubleAmount < amount)
    ) {
      throw new InsufficientFundsToSend();
    }

    const { data } = await this.axios.post<
      TSendMoneyResponse,
      AxiosResponse<TSendMoneyResponse>,
      TSendMoneyRequest
    >(`/v1/transfers/${currency}`, {
      fromPrivateKey: walletFrom.privtaeKey,
      toPublicKey: walletTo.publicKey,
      amount,
    });

    walletFrom.rubleAmount -= amount;
    walletFrom.maticAmount -= TRANSACTION_MATIC_FEE;

    walletTo.rubleAmount += amount;

    await this.walletsRepository.save(walletFrom);
    await this.walletsRepository.save(walletTo);

    const updateStatus = async () => {
      const {
        data: { status },
      } = await this.axios.post<TTransactionStatusResponse>(
        `/v1/transfers/status/${data.transaction}`,
      );

      if (status === 'success') {
        this.updateBalance(walletFrom);
        this.updateBalance(walletTo);
      } else {
        setTimeout(updateStatus, REFRESH_TRANSACTION_STATUS_TIMEOUT);
      }
    };

    setTimeout(updateStatus, REFRESH_TRANSACTION_STATUS_TIMEOUT);
  }

  private async updateBalance(wallet: Wallet) {
    const {
      data: { maticAmount, coinsAmount },
    } = await this.axios.post<TGetBalanceResponse>(
      `/v1/wallets/${wallet.publicKey}/nft/balance`,
    );

    wallet.maticAmount = maticAmount;
    wallet.rubleAmount = coinsAmount;

    return this.walletsRepository.save(wallet);
  }
}
