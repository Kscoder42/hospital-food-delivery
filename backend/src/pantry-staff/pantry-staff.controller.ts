import { Controller, Get, Post, Body } from '@nestjs/common';
import { PantryStaffService } from './pantry-staff.service';

interface CreatePantryStaffDto {
  id: number;
  name: string;
  contactInfo: string;
  location: string;
}

@Controller('pantry-staff')
export class PantryStaffController {
  constructor(private readonly pantryStaffService: PantryStaffService) {}

  @Post()
  create(@Body() createPantryStaffDto: CreatePantryStaffDto): CreatePantryStaffDto {
    return this.pantryStaffService.create(createPantryStaffDto);
  }

  @Get()
  findAll(): CreatePantryStaffDto[] {
    return this.pantryStaffService.findAll();
  }
}
