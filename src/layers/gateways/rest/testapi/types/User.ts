import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString } from 'class-validator';

export class User {
  @ApiProperty()
  @IsInt()
  public id: number;

  @ApiProperty()
  @IsString()
  public login: string;

  @ApiProperty()
  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsString()
  public password: string;

  @ApiProperty()
  @IsString()
  public picture: string;
}

export class UserWnoId extends OmitType(User, ['id'] as const) {}
export class UserWnoPict extends OmitType(User, ['picture'] as const) {}
export class CreateUser extends OmitType(User, ['id', 'picture'] as const) {}
