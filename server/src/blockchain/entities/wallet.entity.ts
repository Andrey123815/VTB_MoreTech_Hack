import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/enities/user.entity';

export type TKeyPair = {
  privateKey: string;
  publicKey: string;
};

const LISTED_BALANCE_PER_MONTH = 100;

@Entity({ name: 'wallets' })
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @OneToOne(() => User, (user) => user.wallet)
  @JoinColumn()
  user: User;

  @Column('json')
  keyPair: TKeyPair;

  @Column({
    type: 'float',
    default: 0,
  })
  balance: number;

  @Column('json')
  listedKeyPair: TKeyPair;

  @Column({
    type: 'float',
    default: 0,
  })
  listedBalance: number;
}
