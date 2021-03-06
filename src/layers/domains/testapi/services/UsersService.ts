import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateUser, UserWnoPict } from 'src/layers/gateways/rest/testapi/types/User';

@Injectable()
export class UsersService {
  private static storage: any[] = [
    {
      id: 1,
      login: 'log1',
      email: 'example@domain.com',
      password: 'password1',
      picture: 'pict1',
    },
    {
      id: 2,
      login: 'log2',
      email: 'example2@domain.com',
      password: 'password2',
      picture: 'pict2',
    },
    {
      id: 3,
      login: 'log3',
      email: 'example3@domain.com',
      password: 'password3',
      picture: 'pict3',
    },
  ];

  public async profile(id: string | number): Promise<any> {
    const users = UsersService.storage.filter((user) => user.id == id);
    if (users.length == 0) {
      throw new NotFoundException();
    }

    return users[0];
  }

  public async update(): Promise<any> {
    throw new NotImplementedException();
  }

  public async create(body: CreateUser): Promise<any> {
    let max = 0;
    UsersService.storage.map((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });

    const user: UserWnoPict = { id: max + 1, ...body };

    UsersService.storage.push(user);

    return body;
  }
}
