import { Injectable } from '@nestjs/common';

@Injectable()
export class PantryStaffService {
  private pantryStaff: { id: number; name: string; contactInfo: string; location: string }[] = [];

  create(staff: { id: number; name: string; contactInfo: string; location: string }) {
    this.pantryStaff.push(staff);
    return staff;
  }

  findAll() {
    return this.pantryStaff;
  }
}
