import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SetupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Апи для чата')
    .setDescription('API тестового бэкенда для чата для фронтенда Маши')
    .setVersion('v1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
