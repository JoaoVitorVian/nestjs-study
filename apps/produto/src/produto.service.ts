import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '../generated/prisma';
import { ProductRepository } from './produto.repository';
import { CreateProductDto } from './CreateProductDto';
import { ProductProducer } from './product.producer';

@Injectable()
export class ProdutoService {
  constructor(
    private productRepository: ProductRepository,
    private productProducer: ProductProducer,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.getAllProducts();
  }

  async getByName(name: string): Promise<Product | null> {
    return await this.productRepository.getByName(name);
  }

  async createProduct(productData: CreateProductDto) {
    const prismaData: Prisma.ProductCreateInput = {
      name: productData.name,
      description: productData.description,
      price: productData.price,
    };
    const created = await this.productRepository.createProduct(prismaData);

    await this.productProducer.send('product-updates', { key: created });

    return created;
  }

  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    const updated = await this.productRepository.updateProduct(id, productData);

    await this.productProducer.send('product-updates', { key: updated });

    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return await this.productRepository.deleteProduct(id);
  }
}
