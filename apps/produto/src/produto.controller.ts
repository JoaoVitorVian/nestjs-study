import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Product } from '../generated/prisma';
import { CreateProductDto } from './CreateProductDto';

@Controller()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('/createProduct')
  async createProduct(@Body() body: CreateProductDto): Promise<Product> {
    return this.produtoService.createProduct(body);
  }

  @Get('/getAllProducts')
  async getAllProducts(): Promise<Product[]> {
    return await this.produtoService.getAllProducts();
  }

  @Get('/getByNameProduct')
  async getByNameProduct(@Query('name') name: string): Promise<Product | null> {
    return await this.produtoService.getByName(name);
  }

  @Put('/updateProduct')
  async updateProduct(@Query('id') id: string, @Body() data: Partial<Product>): Promise<Product> {
    return await this.produtoService.updateProduct(id, data);
  }

  @Delete('/deleteProduct')
  async deleteProduct(@Query('id') id: string): Promise<boolean> {
    return await this.produtoService.deleteProduct(id);
  }
}
