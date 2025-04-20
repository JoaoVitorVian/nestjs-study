/* eslint-disable prettier/prettier */

import { Catalogo } from "./catalogo";

export class CatalogoRepository {
  private mockCatalogos: Catalogo[] = [
    {
      id: 1,
      name: 'Produto Exemplo 1',
      description: 'Descrição do produto exemplo 1',
    },
    {
      id: 2,
      name: 'Produto Exemplo 2',
      description: 'Descrição do produto exemplo 2',
    }
  ];

  // eslint-disable-next-line @typescript-eslint/require-await
  async getCatalogo(): Promise<Catalogo[]>{
  
   return  this.mockCatalogos;
  }
}
