import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';

interface CreateDeliveryDto {
  id: number;
  patientId: number;
  mealId: number;
  deliveryStatus: string;
}

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto): CreateDeliveryDto {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  findAll(): CreateDeliveryDto[] {
    return this.deliveriesService.findAll();
  }
}
