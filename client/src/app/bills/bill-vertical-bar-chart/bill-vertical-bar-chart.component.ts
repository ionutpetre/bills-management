import { Component, Input, OnInit } from '@angular/core';
import Bill from '../bill.entity';
import { BillVerticalBarChartService } from './bill-vertical-bar-chart.service';

@Component({
  selector: 'app-bill-vertical-bar-chart',
  templateUrl: './bill-vertical-bar-chart.component.html',
  styleUrls: ['./bill-vertical-bar-chart.component.css'],
})
export class BillVerticalBarChartComponent implements OnInit {
  @Input() bills: Bill[];

  chartData: any[];
  view: any[] = [1000, 400];

  constructor(private service: BillVerticalBarChartService) {}

  ngOnInit() {
    this.chartData = this.service.getBillChartData(this.bills);
  }

  getMonthFromDateCode(code: string) {
    switch (code) {
      case '0':
        return 'January';
      case '1':
        return 'February';
      case '2':
        return 'March';
      case '3':
        return 'April';
      case '4':
        return 'May';
      case '5':
        return 'June';
      case '6':
        return 'July';
      case '7':
        return 'August';
      case '8':
        return 'September';
      case '9':
        return 'October';
      case '10':
        return 'November';
      case '11':
        return 'December';
      default:
        return 'Invalid Month';
    }
  }
}
