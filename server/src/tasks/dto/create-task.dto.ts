import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  rewardCoins: number;

  @IsNotEmpty()
  @IsInt()
  featureId: number;
}
