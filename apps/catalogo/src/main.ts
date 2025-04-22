import { NestFactory } from '@nestjs/core';
import { CatalogoModule } from './catalogo.module';

async function bootstrap() {
  const app = await NestFactory.create(CatalogoModule);
  console.log('NestJS application is starting...');
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
