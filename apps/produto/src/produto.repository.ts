import { Prisma, Product } from '../generated/prisma';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async getByName(name: string): Promise<Product | null> {
    return await this.prisma.product.findFirst({
      where: {
        name: name,
      },
    });
  }

  async createProduct(createInput: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: createInput,
    });
  }

  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: productData,
    });
  }

  async deleteProduct(id: string): Promise<boolean> {
    try {
      await this.prisma.product.delete({
        where: { id },
      });
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }
}
