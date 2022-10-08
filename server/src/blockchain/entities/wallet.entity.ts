import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/enities/user.entity';

const LISTED_BALANCE_PER_MONTH = 100;

@Entity({ name: 'wallets' })
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  privtaeKey: string;

  @Column()
  publicKey: string;

  @Column({
    type: 'float',
    default: 0,
  })
  maticAmount: number;

  @Column({
    type: 'float',
    default: 0,
  })
  rubleAmount: number;
}
