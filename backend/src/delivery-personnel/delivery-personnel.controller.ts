import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeliveryPersonnelService } from './delivery-personnel.service';

interface CreateDeliveryPersonnelDto {
  id: number;
  name: string;
  contactInfo: string;
}

@Controller('delivery-personnel')
export class DeliveryPersonnelController {
  constructor(private readonly deliveryPersonnelService: DeliveryPersonnelService) {}

  @Post()
  create(@Body() createDeliveryPersonnelDto: CreateDeliveryPersonnelDto): CreateDeliveryPersonnelDto {
    return this.deliveryPersonnelService.create(createDeliveryPersonnelDto);
  }

  @Get()
  findAll(): CreateDeliveryPersonnelDto[] {
    return this.deliveryPersonnelService.findAll();
  }
}
