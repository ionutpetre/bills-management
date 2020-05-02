import { Injectable } from '@nestjs/common';
import { Bill } from './bill.entity';
import { BillRepository } from './bill.repository';

@Injectable()
export class BillsService {
  constructor(private readonly billRepository: BillRepository) {}

  get(type?: string): Promise<Bill[]> {
    return this.billRepository.find({
      type,
    });
  }

  create(bill: Bill): Promise<Bill> {
    return this.billRepository.save(bill);
  }
}
