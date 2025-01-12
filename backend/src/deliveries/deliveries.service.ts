import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveriesService {
  private deliveries: { id: number; patientId: number; mealId: number; deliveryStatus: string }[] = [];

  create(delivery: { id: number; patientId: number; mealId: number; deliveryStatus: string }) {
    this.deliveries.push(delivery);
    return delivery;
  }

  findAll() {
    return this.deliveries;
  }
}
