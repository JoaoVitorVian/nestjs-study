import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { ProductRepository } from './produto.repository';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [ProdutoController],
  providers: [PrismaService, ProductRepository, ProdutoService],
})
export class ProdutoModule {}
