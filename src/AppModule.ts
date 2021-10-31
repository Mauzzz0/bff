import { Module } from '@nestjs/common';
import { MessageModule } from './layers/domains/testapi/modules/MessageModule';
import { UsersModule } from './layers/domains/testapi/modules/UsersModule';

@Module({
  imports: [UsersModule, MessageModule],
})
export class AppModule {}
