import { Module } from '@nestjs/common';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';

@Module({
  imports: [],
  controllers: [CatalogoController],
  providers: [CatalogoService],
})
export class CatalogoModule {}
