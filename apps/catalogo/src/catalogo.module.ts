import { Module } from '@nestjs/common';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';
import { CatalogoRepository } from './catalogo.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CatalogoController],
  providers: [CatalogoService, CatalogoRepository],
})
export class CatalogoModule {}
