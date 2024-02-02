import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, UserWithdrawDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto, 'createUserDto');
    return 'This action adds a new user';
  }

  @Post('user/withdraw')
  userWithdraw(@Body() userWithdrawDto: UserWithdrawDto) {
    return this.appService.userWithdraw(userWithdrawDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
