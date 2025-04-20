import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { Catalogo } from './catalogo';

@Controller()
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Get('/testeCatalogo')
  async getHello(): Promise<Catalogo[]> {
    return this.catalogoService.getCatalogo();
  }
}
