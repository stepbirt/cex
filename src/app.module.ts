import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryEntity } from './repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [AppController],
  providers: [RepositoryEntity, AppService],
})
export class AppModule {}
