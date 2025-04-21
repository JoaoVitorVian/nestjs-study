import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '../generated/prisma';
import { ProductRepository } from './produto.repository';
import { CreateProductDto } from './CreateProductDto';

@Injectable()
export class ProdutoService {
  constructor(private productRepository: ProductRepository) {}

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
    return this.productRepository.createProduct(prismaData);
  }

  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    return await this.productRepository.updateProduct(id, productData);
  }

  async deleteProduct(id: string): Promise<boolean> {
    return await this.productRepository.deleteProduct(id);
  }
}
