import { NestFactory } from '@nestjs/core';
import { ProdutoModule } from './produto.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ProdutoModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Isso é importante para o Nest instanciar corretamente os DTOs
    }),
  );
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
