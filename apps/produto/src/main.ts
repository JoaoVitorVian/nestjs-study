import { NestFactory } from '@nestjs/core';
import { ProdutoModule } from './produto.module';

async function bootstrap() {
  const app = await NestFactory.create(ProdutoModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
