import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsService {
  private patients: { id: number; name: string; diseases: string; allergies: string; roomNumber: string; bedNumber: string; floorNumber: string; age: number; gender: string; contactInfo: string; emergencyContact: string; others?: string }[] = [];

  create(patient: { id: number; name: string; diseases: string; allergies: string; roomNumber: string; bedNumber: string; floorNumber: string; age: number; gender: string; contactInfo: string; emergencyContact: string; others?: string }) {
    this.patients.push(patient);
    return patient;
  }

  findAll() {
    return this.patients;
  }
}
