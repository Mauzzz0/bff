import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/layers/domains/testapi/services/UsersService';
import { User } from '../types/User';

@ApiTags('User')
@ApiExtraModels(User)
@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ description: 'Профиль' })
  @Get(':id')
  public async show(@Param('id') id: number): Promise<any> {
    return this.userService.profile(id);
  }

  @ApiOperation({ description: 'Удалить профиль' })
  @Delete(':id')
  public async delete(): Promise<any> {
    return this.userService.delete();
  }

  @ApiOperation({ description: 'Обновить профиль' })
  @Put(':id')
  public async update(): Promise<any> {
    return this.userService.update();
  }

  @ApiOperation({ description: 'Создать' })
  @Post('')
  public async create(@Body() body: User): Promise<any> {
    return this.userService.create(body);
  }
}
