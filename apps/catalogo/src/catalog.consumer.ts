/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/kafka/catalog.consumer.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Kafka, EachMessagePayload } from 'kafkajs';
import { CatalogoRepository } from './catalogo.repository';

@Injectable()
export class CatalogConsumer implements OnModuleInit {
  private readonly logger = new Logger(CatalogConsumer.name);

  constructor(private readonly catalogoRepository: CatalogoRepository) {}

  async onModuleInit() {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
    console.log('Kafka consumer connected');
    const consumer = kafka.consumer({ groupId: 'catalog-group' });

    await consumer.connect();
    console.log('Kafka consumer connected');
    await consumer.subscribe({
      topic: 'product-updates',
      fromBeginning: true,
    });
    console.log('Subscribed to topic: product-updates');
    await consumer.run({
      eachMessage: async ({ message }: EachMessagePayload) => {
        console.log('Message received from Kafka:');
        try {
          if (!message.value) {
            console.log('Message received from Kafka:');
            this.logger.warn('Received message with null value');
            return;
          }
          const productData = JSON.parse(message.value.toString());
          console.log('Message received from Kafka:', productData); // Adicione este log
          await this.catalogoRepository.upsertProduct(productData);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          this.logger.log(`Product updated in catalog: ${productData.id}`);
        } catch (error) {
          this.logger.error('Error processing message:', error);
        }
      },
    });
  }
}
