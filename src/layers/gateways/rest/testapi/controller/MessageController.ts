import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessageService } from 'src/layers/domains/testapi/services/MessageService';
import { MessageWnoId, UpdateMessage } from '../types/Message';

@ApiTags('Message')
@ApiExtraModels(MessageWnoId, UpdateMessage)
@Controller('msg')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @ApiOperation({ description: '' })
  @Get('')
  public async show(): Promise<any> {
    return this.messageService.get();
  }

  @ApiOperation({ description: '' })
  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<any> {
    return this.messageService.delete(id);
  }

  @ApiOperation({ description: '' })
  @Put(':id')
  public async update(@Param('id') id: number, @Body() body: UpdateMessage): Promise<any> {
    return this.messageService.update(id, body);
  }

  @ApiOperation({ description: '' })
  @Post('')
  public async create(@Body() body: MessageWnoId): Promise<any> {
    return this.messageService.create(body);
  }
}
