import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsInt, IsString, ValidateNested } from 'class-validator';

export class Message {
  @ApiProperty()
  @IsInt()
  public id: number;

  @ApiProperty()
  @IsInt()
  public senderId: number;

  @ApiProperty()
  @IsString()
  public text: string;

  @ApiProperty()
  @IsArray()
  public attachments?: string[];

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  public datetime: Date;
}

export class MessageWnoId extends OmitType(Message, ['id'] as const) {}
export class UpdateMessage extends OmitType(Message, ['id', 'senderId', 'datetime'] as const) {}

export class MessageList {
  @ApiProperty({ type: [Message] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Message)
  public list: Message[];
}
