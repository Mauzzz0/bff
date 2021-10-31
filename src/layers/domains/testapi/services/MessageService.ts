import { Injectable } from '@nestjs/common';
import e from 'express';
import { Message } from 'src/layers/gateways/rest/testapi/types/Message';

@Injectable()
export class MessageService {
  private static storage: Message[] = [
    {
      id: 1,
      senderId: 1,
      text: 'Всем привет, кто здесь?',
      datetime: new Date('2021-10-31T21:08:15.902Z'),
    },
    {
      id: 2,
      senderId: 2,
      text: 'Привет, я тут)',
      datetime: new Date('2021-10-31T21:08:20.902Z'),
    },
    {
      id: 3,
      senderId: 3,
      text: 'Я тоже тут, ребята!)',
      datetime: new Date('2021-10-31T21:08:30.902Z'),
    },
    {
      id: 4,
      senderId: 2,
      text: 'У кого как дела?',
      datetime: new Date('2021-10-31T21:08:32.902Z'),
    },
    {
      id: 5,
      senderId: 2,
      text: 'Нас только трое?',
      datetime: new Date('2021-10-31T21:08:39.902Z'),
    },
    {
      id: 6,
      senderId: 3,
      text: 'Видимо да',
      datetime: new Date('2021-10-31T21:08:41.902Z'),
    },
    {
      id: 7,
      senderId: 1,
      text: 'У меня всё хорошо, у вас как?',
      datetime: new Date('2021-10-31T21:08:42.902Z'),
    },
    {
      id: 8,
      senderId: 3,
      text: 'У меня тоже норм',
      datetime: new Date('2021-10-31T21:08:45.902Z'),
    },
    {
      id: 9,
      senderId: 2,
      text: 'Вот и поговорили. До встречи через год. :(',
      datetime: new Date('2021-10-31T21:08:46.902Z'),
    },
  ];

  public async get(): Promise<any> {
    return MessageService.storage;
  }

  public async delete(id: number | string): Promise<any> {
    MessageService.storage = MessageService.storage.filter((message) => message.id !== id);

    return { result: true };
  }

  public async update(id: number, body: any): Promise<any> {
    MessageService.storage.map((message) => {
      if (message.id !== id) {
        return message;
      } else {
        return (message.text = body.text);
      }
    });
    // body.id = id;
    // MessageService.storage.push(body);

    return { result: true };
  }

  public async create(body: any): Promise<any> {
    let max = 0;
    MessageService.storage.map((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });

    body.id = max + 1;

    MessageService.storage.push(body);

    return body;
  }
}