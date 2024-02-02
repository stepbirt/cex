import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_balances' })
export class UserBalances {
  @Column()
  user_id: number;

  @Column()
  token_type_id: number;

  @Column()
  balance: number;
}
