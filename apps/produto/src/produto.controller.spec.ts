import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

describe('ProdutoController', () => {
  let produtoController: ProdutoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [ProdutoService],
    }).compile();

    produtoController = app.get<ProdutoController>(ProdutoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(produtoController.getAllProducts()).toBe('Hello World!');
    });
  });
});
