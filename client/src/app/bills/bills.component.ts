import { Component, OnInit } from '@angular/core';
import { BillsService } from './bills.service';
import Bill from './bill.entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  bills: Bill[];

  constructor(
    private route: ActivatedRoute,
    private billsService: BillsService
  ) {}

  ngOnInit() {
    this.getBills();
  }

  getBills() {
    const billType = this.route.snapshot.paramMap.get('type');
    if (billType) {
      this.billsService.getBillsByType(billType).subscribe((bills) => {
        this.bills = bills;
      });
    } else {
      this.billsService.getBills().subscribe((bills) => {
        this.bills = bills;
      });
    }
  }

  createBill(bill: Bill) {
    this.billsService.createBill(bill).subscribe(() => {
      this.getBills();
    });
  }
}
