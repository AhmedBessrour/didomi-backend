import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { config } from 'src/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}
bootstrap();
