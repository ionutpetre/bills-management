import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BillsModule],
})
export class AppModule {}
