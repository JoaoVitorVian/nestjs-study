/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Product } from 'apps/produto/generated/prisma';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CatalogoRepository {
  private readonly PRODUCT_SERVICE_URL = 'http://localhost:3001/getAllProducts';

  constructor(private readonly httpService: HttpService) {}

  async getCatalogo(): Promise<Product[]> {
    try {
      const response = await firstValueFrom(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this.httpService.get<Product[]>(this.PRODUCT_SERVICE_URL).pipe(
          catchError((error: Error) => {
            throw new Error(`Falha ao buscar catálogo: ${error.message}`);
          }),
        ),
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return response.data;
    } catch (error) {
      throw new Error(`Falha ao buscar catálogo: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}
