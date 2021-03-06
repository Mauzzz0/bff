import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiOkResponse } from 'src/common/swagger/decorators/ApiOkResponse';
import { UsersService } from 'src/layers/domains/testapi/services/UsersService';
import { CreateUser, User } from '../types/User';

@ApiTags('User')
@ApiExtraModels(User, CreateUser)
@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ description: 'Профиль юзера по id' })
  @ApiOkResponse(User)
  @Get(':id')
  public async show(@Param('id') id: number): Promise<any> {
    return this.userService.profile(id);
  }

  @ApiOperation({ description: 'Обновить профиль' })
  @Put(':id')
  public async update(): Promise<any> {
    return this.userService.update();
  }

  @ApiOperation({ description: 'Создать юзера' })
  @ApiOkResponse(CreateUser)
  @Post('')
  public async create(@Body() body: CreateUser): Promise<any> {
    return this.userService.create(body);
  }
}
