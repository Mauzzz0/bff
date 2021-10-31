import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { User } from 'src/layers/gateways/rest/testapi/types/User';

@Injectable()
export class UsersService {
  private static storage: {
    id: number;
    email: string;
    password: string;
    picture: string;
  }[] = [
    {
      id: 1,
      email: 'example@domain.com',
      password: 'password1',
      picture: 'pict1',
    },
    {
      id: 2,
      email: 'example2@domain.com',
      password: 'password2',
      picture: 'pict2',
    },
    {
      id: 3,
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

  public async delete(): Promise<any> {
    throw new NotImplementedException();
  }

  public async update(): Promise<any> {
    throw new NotImplementedException();
  }

  public async create(body: User): Promise<any> {
    body['id'] = UsersService.storage.length + 1;
    UsersService.storage.push(body as any);

    return body;
  }
}
