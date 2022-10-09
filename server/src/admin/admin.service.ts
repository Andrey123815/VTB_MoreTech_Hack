import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { User } from '../users/enities/user.entity';

const SEND_MATIC_TO_USER_AMOUNT = 0.005;
const LISTED_LIMIT_COINS = 1000;

@Injectable()
export class AdminService {
  constructor(
    private blockchainService: BlockchainService,
    private usersService: UsersService,
  ) {}

  async fillUsersWallets(admin: User, amount: number) {
    await this.fillUsersMainWallets(admin, amount);
    await this.fillUsersListedWallets(admin);
  }

  private async fillUsersMainWallets(admin: User, amount: number) {
    const users = await this.usersService.findAll();

    for (const user of users) {
      await this.blockchainService.sendMoney(
        admin.mainWallet,
        user.mainWallet,
        SEND_MATIC_TO_USER_AMOUNT,
        'matic',
      );

      await this.blockchainService.sendMoney(
        admin.mainWallet,
        user.mainWallet,
        amount,
        'ruble',
      );
    }
  }

  private async fillUsersListedWallets(admin: User) {
    const users = await this.usersService.findAll();

    for (const user of users) {
      await this.blockchainService.sendMoney(
        admin.mainWallet,
        user.listedWallet,
        SEND_MATIC_TO_USER_AMOUNT,
        'matic',
      );

      await this.blockchainService.sendMoney(
        admin.mainWallet,
        user.listedWallet,
        LISTED_LIMIT_COINS - user.listedWallet.rubleAmount,
        'ruble',
      );
    }
  }
}
