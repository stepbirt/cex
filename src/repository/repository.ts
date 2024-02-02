import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ICreateUser } from 'src/interface/user.interface';
export class RepositoryEntity {
  constructor(
    @InjectRepository(Users)
    private readonly $users: Repository<Users>,
  ) {}

  createUser(payload: ICreateUser) {
    return this.$users.save(payload);
  }

  findOneUser(filters: FindOptionsWhere<Users> | FindOptionsWhere<Users>[]) {
    return this.$users.findOneBy(filters);
  }
}
