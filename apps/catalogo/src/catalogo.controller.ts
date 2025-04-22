import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { Product } from 'apps/produto/generated/prisma';

@Controller()
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Get('/getAllCatalogo')
  async getAllCatalogo(): Promise<Product[]> {
    return this.catalogoService.getCatalogo();
  }
}
