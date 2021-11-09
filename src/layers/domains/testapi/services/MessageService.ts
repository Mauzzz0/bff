import { Injectable } from '@nestjs/common';
import {
  CreateMessage,
  Message,
  MessageWnoId,
} from 'src/layers/gateways/rest/testapi/types/Message';

@Injectable()
export class MessageService {
  private static storage: Message[] = [
    {
      id: 1,
      senderId: 1,
      text: 'Всем привет, кто здесь?',
      datetime: new Date('2021-10-31T21:08:15.902Z'),
      edited: true,
    },
    {
      id: 2,
      senderId: 2,
      text: 'Привет, я тут)',
      datetime: new Date('2021-10-31T21:08:20.902Z'),
      edited: false,
    },
    {
      id: 3,
      senderId: 3,
      text: 'Я тоже тут, ребята!)',
      datetime: new Date('2021-10-31T21:08:30.902Z'),
      edited: false,
    },
    {
      id: 4,
      senderId: 2,
      text: 'У кого как дела?',
      datetime: new Date('2021-10-31T21:08:32.902Z'),
      edited: false,
    },
    {
      id: 5,
      senderId: 2,
      text: 'Нас только трое?',
      datetime: new Date('2021-10-31T21:08:39.902Z'),
      edited: true,
    },
    {
      id: 6,
      senderId: 3,
      text: 'Видимо да',
      datetime: new Date('2021-10-31T21:08:41.902Z'),
      edited: false,
    },
    {
      id: 7,
      senderId: 1,
      text: 'У меня всё хорошо, у вас как?',
      datetime: new Date('2021-10-31T21:08:42.902Z'),
      edited: false,
    },
    {
      id: 8,
      senderId: 3,
      text: 'У меня тоже норм',
      datetime: new Date('2021-10-31T21:08:45.902Z'),
      edited: false,
    },
    {
      id: 9,
      senderId: 2,
      text: 'Вот и поговорили. До встречи через год. :(',
      datetime: new Date('2021-10-31T21:08:46.902Z'),
      edited: true,
    },
  ];

  public async get(): Promise<any> {
    return { list: MessageService.storage };
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
        if (body.attachments) {
          message.text = body.text;
          message.attachments = body.attachments;
          return message;
        }
        return (message.text = body.text);
      }
    });
    // body.id = id;
    // MessageService.storage.push(body);

    return { result: true };
  }

  public async create(body: CreateMessage): Promise<any> {
    // временное плохое решение)
    try {
      let max = 0;
      MessageService.storage.map((item) => {
        if (item.id > max) {
          max = item.id;
        }
      });

      const msg = { ...body, id: max + 1, edited: false };

      if (body.text == 'callerror') {
        throw new Error();
      }

      MessageService.storage.push(msg);
    } catch (e) {
      return {
        result: false,
      };
    }
    return {
      result: true,
    };
  }
}
