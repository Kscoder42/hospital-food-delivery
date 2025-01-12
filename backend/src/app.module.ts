import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { DietChartsModule } from './diet-charts/diet-charts.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { PantryStaffModule } from './pantry-staff/pantry-staff.module';
import { DeliveryPersonnelModule } from './delivery-personnel/delivery-personnel.module';

@Module({
  imports: [PatientsModule, DietChartsModule, DeliveriesModule, PantryStaffModule, DeliveryPersonnelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
