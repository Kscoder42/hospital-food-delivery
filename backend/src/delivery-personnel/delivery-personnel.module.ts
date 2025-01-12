import { Module } from '@nestjs/common';
import { DeliveryPersonnelController } from './delivery-personnel.controller';
import { DeliveryPersonnelService } from './delivery-personnel.service';

@Module({
  controllers: [DeliveryPersonnelController],
  providers: [DeliveryPersonnelService],
})
export class DeliveryPersonnelModule {}
