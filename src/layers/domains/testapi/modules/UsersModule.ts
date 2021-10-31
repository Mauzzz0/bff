import { Module } from '@nestjs/common';
import { UserController } from 'src/layers/gateways/rest/testapi/controller/UserController';
import { UsersService } from '../services/UsersService';

@Module({
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
