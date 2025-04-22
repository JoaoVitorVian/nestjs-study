import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProductProducer implements OnModuleInit {
  private producer: Producer;

  async onModuleInit() {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    });

    this.producer = kafka.producer();
    await this.producer.connect();
  }

  async send(topic: string, message: any) {
    const record: ProducerRecord = {
      topic,
      messages: [{ value: JSON.stringify(message) }],
    };
    console.log('Sending message to Kafka:', record);
    await this.producer.send(record);
  }
}
