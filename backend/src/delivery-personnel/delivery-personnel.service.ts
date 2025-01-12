import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryPersonnelService {
  private deliveryPersonnel: { id: number; name: string; contactInfo: string }[] = [];

  create(personnel: { id: number; name: string; contactInfo: string }) {
    this.deliveryPersonnel.push(personnel);
    return personnel;
  }

  findAll() {
    return this.deliveryPersonnel;
  }
}
