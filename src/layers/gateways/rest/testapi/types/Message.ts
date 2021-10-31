import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';

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

  // @ApiProperty()
  // @IsString()
  // public attachments?: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  public datetime: Date;
}

export class MessageWnoId extends OmitType(Message, ['id'] as const) {}
export class MessageWonlyText extends OmitType(Message, ['id', 'senderId', 'datetime'] as const) {}
