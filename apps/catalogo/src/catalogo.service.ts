import { Injectable } from '@nestjs/common';
import { Catalogo } from './catalogo';
import { CatalogoRepository } from './catalogo.repository';

@Injectable()
export class CatalogoService {
  constructor(private catalogoRepository: CatalogoRepository) {}

  async getCatalogo(): Promise<Catalogo[]> {
    return await this.catalogoRepository.getCatalogo();
  }
}
