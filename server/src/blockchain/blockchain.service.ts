import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Axios } from 'axios';
import { User } from 'src/users/enities/user.entity';
import { Repository } from 'typeorm';
import { Wallet } from '../blockchain/entities/wallet.entity';

type TCreateWalletResponse = {
  privateKey: string;
  publicKey: string;
};

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

  async createWallet(user: User): Promise<Wallet> {
    const { data: keyPair } = await this.axios.post<TCreateWalletResponse>(
      '/v1/wallets/new',
    );
    const { data: listedKeyPair } =
      await this.axios.post<TCreateWalletResponse>('/v1/wallets/new');

    const wallet = new Wallet();
    wallet.user = user;
    wallet.keyPair = keyPair;
    wallet.listedKeyPair = listedKeyPair;

    await this.walletsRepository.save(wallet);

    return wallet;
  }
}
