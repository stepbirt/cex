import { Injectable } from '@nestjs/common';
import { IUserWithdrawDto } from './interface/withdraw.interface';
import { RepositoryEntity } from './repository';

@Injectable()
export class AppService {
  constructor(private repositoryEntity: RepositoryEntity) {}
  getHello(): string {
    return 'Hello World!';
  }

  async userWithdraw(dto: IUserWithdrawDto) {
    const user = await this.repositoryEntity.findOneUser({
      user_id: dto.user_id,
    });
    if (!user) {
      throw new Error('Not found user');
    }
    // const userBalance

    return { status: true };
  }
}
