import { Module } from '@nestjs/common';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';
import { CatalogoRepository } from './catalogo.repository';

@Module({
  imports: [],
  controllers: [CatalogoController],
  providers: [CatalogoService, CatalogoRepository],
})
export class CatalogoModule {}
