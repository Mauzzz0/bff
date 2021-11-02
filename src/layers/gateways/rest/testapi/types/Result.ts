import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class Result {
  @ApiProperty()
  @IsBoolean()
  public result: boolean;
}
