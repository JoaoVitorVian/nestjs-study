import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { Catalogo } from './catalogo';

@Controller()
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Get('/getAllCatalogo')
  async getAllCatalogo(): Promise<Catalogo[]> {
    return this.catalogoService.getCatalogo();
  }
}
