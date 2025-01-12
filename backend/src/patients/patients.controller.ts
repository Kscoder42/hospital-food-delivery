import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientsService } from './patients.service';

interface CreatePatientDto {
  id: number;
  name: string;
  diseases: string;
  allergies: string;
  roomNumber: string;
  bedNumber: string;
  floorNumber: string;
  age: number;
  gender: string;
  contactInfo: string;
  emergencyContact: string;
  others?: string;
}

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto): CreatePatientDto {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll(): CreatePatientDto[] {
    return this.patientsService.findAll();
  }
}
