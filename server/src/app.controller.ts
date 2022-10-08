import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { User } from './users/enities/user.entity';
import { User as UserDecorator } from './users/user.decorator';
import { SendBonusDto, SendBonusType } from './dto/send-bonus.dto';
import { UsersService } from './users/users.service';
import { BlockchainService } from './blockchain/blockchain.service';
import { FeaturesService } from './features/features.service';

@Controller()
export class AppController {
  constructor(
    private blockchainService: BlockchainService,
    private usersServise: UsersService,
    private featuresService: FeaturesService,
  ) {}

  @Post('bonus')
  async sendBonus(
    @UserDecorator() userFrom: User,
    @Body() sendBonusDto: SendBonusDto,
  ) {
    const userTo = await this.usersServise.get(sendBonusDto.userId);
    if (!userTo) {
      throw new BadRequestException('userId is not exist');
    }

    switch (sendBonusDto.type) {
      case SendBonusType.COIN:
        await this.blockchainService.sendMoney(
          userFrom.listedWallet,
          userTo.mainWallet,
          sendBonusDto.amount,
          'ruble',
        );
        break;
      case SendBonusType.FEATURE:
        if (sendBonusDto.featureId === undefined) {
          throw new BadRequestException('Feature must be in request');
        }
        await this.featuresService.richFeature(
          userTo,
          sendBonusDto.featureId,
          sendBonusDto.amount,
        );
        break;
    }
  }
}
