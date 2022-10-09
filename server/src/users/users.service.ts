import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeaturesService } from '../features/features.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './enities/user.entity';

@Injectable()
export class UsersService {
  static USER_RELATION_OPTIONS = {
    userFeatures: {
      feature: true,
    },
    mainWallet: true,
    listedWallet: true,
    team: true,
  };

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private blockchainService: BlockchainService,
    private featuresService: FeaturesService,
  ) {}

  private prepareUser(user: User | null): User | null {
    if (!user) {
      return user;
    }
    user.features = this.featuresService.getFeatures(user);
    user.level = this.featuresService.getLevel(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return (
      await this.usersRepository.find({
        relations: UsersService.USER_RELATION_OPTIONS,
      })
    ).map((user) => this.prepareUser(user));
  }

  async findAllInTeam(teamId: number | undefined): Promise<User[]> {
    if (teamId === undefined) {
      return [];
    }

    return (
      await this.usersRepository.find({
        where: {
          teamId,
        },
        relations: UsersService.USER_RELATION_OPTIONS,
      })
    ).map((user) => this.prepareUser(user));
  }

  async findOne(login: string): Promise<User | null> {
    return this.prepareUser(
      await this.usersRepository.findOne({
        where: {
          login,
        },
        relations: UsersService.USER_RELATION_OPTIONS,
      }),
    );
  }

  async get(id: number): Promise<User | null> {
    return this.prepareUser(
      await this.usersRepository.findOne({
        where: { id },
        relations: UsersService.USER_RELATION_OPTIONS,
      }),
    );
  }

  async create(userDto: CreateUserDto): Promise<User> {
    let user = this.usersRepository.create(userDto);

    user.mainWallet = await this.blockchainService.createWallet();
    user.listedWallet = await this.blockchainService.createWallet();

    user = await this.usersRepository.save(user);

    user.userFeatures = await this.featuresService.addFeaturesToUser(user);

    return this.prepareUser(user);
  }
}
