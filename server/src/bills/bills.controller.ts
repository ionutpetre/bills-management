import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { Bill } from './bill.entity';
import { BillsService } from './bills.service';

@Controller('/bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(@Query('type') billType: string): Promise<Bill[]> {
    return this.billsService.get(billType);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  add(@Body() bill: Bill): Promise<Bill> {
    return this.billsService.create(bill);
  }
}
