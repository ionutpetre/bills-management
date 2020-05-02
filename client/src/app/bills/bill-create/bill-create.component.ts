import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Bill from '../bill.entity';

@Component({
  selector: 'app-bill-create',
  templateUrl: './bill-create.component.html',
  styleUrls: ['./bill-create.component.css'],
})
export class BillCreateComponent implements OnInit {
  @Output() create: EventEmitter<Bill> = new EventEmitter();
  bill: Bill;

  ngOnInit() {
    this.setDefaultBill();
  }

  setDefaultBill() {
    this.bill = {
      type: '',
      title: '',
      description: '',
      value: 0,
      created: new Date(),
    };
  }

  onCreateBill() {
    this.create.emit(this.bill);
    this.setDefaultBill();
  }
}
