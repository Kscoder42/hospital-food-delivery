import { Module } from '@nestjs/common';
import { PantryStaffController } from './pantry-staff.controller';
import { PantryStaffService } from './pantry-staff.service';

@Module({
  controllers: [PantryStaffController],
  providers: [PantryStaffService],
})
export class PantryStaffModule {}
