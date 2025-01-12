import { Injectable } from '@nestjs/common';

@Injectable()
export class DietChartsService {
  private dietCharts: { id: number; patientId: number; mealTime: string; ingredients: string; instructions: string }[] = [];

  create(dietChart: { id: number; patientId: number; mealTime: string; ingredients: string; instructions: string }) {
    this.dietCharts.push(dietChart);
    return dietChart;
  }

  findAll() {
    return this.dietCharts;
  }
}
