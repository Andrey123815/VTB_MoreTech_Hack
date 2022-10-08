import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeaturesService } from '../features/features.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './enities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private blockchainService: BlockchainService,
    private featuresService: FeaturesService,
  ) {}

  private prepareUser(user: User): User {
    user.features = this.featuresService.getFeatures(user);
    user.level = this.featuresService.getLevel(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return (
      await this.usersRepository.find({
        relations: {
          userFeatures: true,
          team: true,
        },
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
        relations: {
          userFeatures: true,
          team: true,
        },
      })
    ).map((user) => this.prepareUser(user));
  }

  async findOne(login: string): Promise<User> {
    return this.prepareUser(
      await this.usersRepository.findOne({
        where: {
          login,
        },
        relations: {
          userFeatures: true,
          team: true,
        },
      }),
    );
  }

  async get(id: number): Promise<User> {
    return this.prepareUser(await this.usersRepository.findOneBy({ id }));
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
