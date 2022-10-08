import { IsNotEmpty, IsString, IsInt, IsEnum } from 'class-validator';
import { UserRole } from '../enities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  specialization: string;

  @IsNotEmpty()
  @IsString()
  grade: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;

  @IsNotEmpty()
  @IsInt()
  teamId: number;

  @IsNotEmpty()
  @IsString()
  avatarSrc: string;
}
