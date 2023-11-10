import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

import { AppModule } from './app.module';
import { mainLogger } from './shared/loggers';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Taxi backend API')
    .setVersion('0.1.1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(process.env.SERVER_PORT).then(() => {
    mainLogger.log(`http://localhost:${process.env.SERVER_PORT}/`);
    mainLogger.log(`http://localhost:${process.env.SERVER_PORT}/api-docs`);
  });
}
bootstrap();
