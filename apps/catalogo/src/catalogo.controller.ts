import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';

@Controller()
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Get('/testeCatalogo')
  getHello(): string {
    return this.catalogoService.getHello();
  }
}
