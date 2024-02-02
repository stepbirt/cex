import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UserWithdrawDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  deposit_withdraw_type_id: number;

  @IsNumber()
  @IsOptional()
  user_wallet_address_id: number;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
