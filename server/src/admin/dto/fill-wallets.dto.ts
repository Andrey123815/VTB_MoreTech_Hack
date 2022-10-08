import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class FillWalletsDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsBoolean()
  isAutomatic: boolean;
}
