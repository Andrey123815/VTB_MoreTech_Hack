import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export enum SendBonusType {
  COIN = 'coin',
  FEATURE = 'feature',
}

export class SendBonusDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsEnum(SendBonusType)
  type: SendBonusType;

  @IsOptional()
  @IsInt()
  featureId?: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
