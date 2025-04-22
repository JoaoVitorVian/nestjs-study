import { Injectable } from '@nestjs/common';
import { CatalogoRepository } from './catalogo.repository';
import { Product } from 'apps/produto/generated/prisma';

@Injectable()
export class CatalogoService {
  constructor(private catalogoRepository: CatalogoRepository) {}

  async getCatalogo(): Promise<Product[]> {
    return await this.catalogoRepository.getCatalogo();
  }
}
