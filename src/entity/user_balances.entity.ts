import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_balances' })
export class UserBalances {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  token_type_id: number;

  @Column()
  balance: number;
}
