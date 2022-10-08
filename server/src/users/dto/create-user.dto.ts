import { IsNotEmpty } from 'class-validator';
import { UserRole } from '../enities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  specialization: string;

  @IsNotEmpty()
  grade: string;

  @IsNotEmpty()
  role: UserRole;

  @IsNotEmpty()
  teamId: number;

  @IsNotEmpty()
  avatarSrc: string;
}
