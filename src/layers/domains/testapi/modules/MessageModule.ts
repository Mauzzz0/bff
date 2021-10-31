import { Module } from '@nestjs/common';
import { MessageController } from 'src/layers/gateways/rest/testapi/controller/MessageController';
import { MessageService } from '../services/MessageService';

@Module({
  providers: [MessageService],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
