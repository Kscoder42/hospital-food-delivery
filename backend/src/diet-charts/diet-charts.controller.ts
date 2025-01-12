import { Controller, Get, Post, Body } from '@nestjs/common';
import { DietChartsService } from './diet-charts.service';

interface CreateDietChartDto {
  id: number;
  patientId: number;
  mealTime: string;
  ingredients: string;
  instructions: string;
}

@Controller('diet-charts')
export class DietChartsController {
  constructor(private readonly dietChartsService: DietChartsService) {}

  @Post()
  create(@Body() createDietChartDto: CreateDietChartDto): CreateDietChartDto {
    return this.dietChartsService.create(createDietChartDto);
  }

  @Get()
  findAll(): CreateDietChartDto[] {
    return this.dietChartsService.findAll();
  }
}
