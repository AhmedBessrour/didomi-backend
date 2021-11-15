import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { config } from 'src/config';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('DIDOMI API Documentation')
    .setDescription('DIDOMI Consents API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(config.port);
}
bootstrap();
