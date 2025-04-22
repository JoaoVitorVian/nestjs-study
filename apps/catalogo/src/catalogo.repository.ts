// catalogo.repository.ts
import { Injectable } from '@nestjs/common';
import { Product } from 'apps/produto/generated/prisma';

@Injectable()
export class CatalogoRepository {
  private localProducts: Product[] = [];

  getCatalogo(): Promise<Product[]> {
    return Promise.resolve(this.localProducts);
  }

  upsertProduct(productData: Product): Promise<void> {
    const index = this.localProducts.findIndex((p) => p.id === productData.id);
    if (index >= 0) {
      this.localProducts[index] = productData;
    } else {
      this.localProducts.push(productData);
    }
    console.log('Current products:', this.localProducts);
    return Promise.resolve();
  }
}
