import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiOkResponse } from 'src/common/swagger/decorators/ApiOkResponse';
import { MessageService } from 'src/layers/domains/testapi/services/MessageService';
import { CreateMessage, Message, MessageList, MessageWnoId, UpdateMessage } from '../types/Message';
import { Result } from '../types/Result';

@ApiTags('Message')
@ApiExtraModels(Message, Result, CreateMessage, UpdateMessage, MessageList)
@Controller('msg')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @ApiOperation({ description: 'Список сообщений' })
  @ApiOkResponse(MessageList)
  @Get('')
  public async show(): Promise<any> {
    return this.messageService.get();
  }

  @ApiOperation({ description: 'Удалить сообщение' })
  @ApiOkResponse(Result)
  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<any> {
    return this.messageService.delete(id);
  }

  @ApiOperation({ description: 'Обновить сообщение' })
  @ApiOkResponse(Result)
  @Put(':id')
  public async update(@Param('id') id: number, @Body() body: UpdateMessage): Promise<any> {
    return this.messageService.update(id, body);
  }

  @ApiOperation({
    description:
      'Создать сообщение<br/>Если в "text" вставить сообщение "callerror", сгенерирует ошибку',
  })
  @ApiOkResponse(Message)
  @Post('')
  public async create(@Body() body: CreateMessage): Promise<any> {
    return this.messageService.create(body);
  }
}
