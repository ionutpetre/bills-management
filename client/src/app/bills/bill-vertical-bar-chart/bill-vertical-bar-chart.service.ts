import { Injectable } from '@angular/core';
import Bill from '../bill.entity';

@Injectable({
  providedIn: 'root',
})
export class BillVerticalBarChartService {
  private getMonthFromDateCode(code: string) {
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

  private getBillsByYearAndMonth(bills: Bill[]) {
    return bills.reduce((acc, bill) => {
      const billYear = new Date(bill.created).getFullYear().toString();
      if (!acc[billYear]) {
        acc[billYear] = {};
      }
      const billMonth = new Date(bill.created).getMonth().toString();
      if (!acc[billYear][billMonth]) {
        acc[billYear][billMonth] = [];
      }
      acc[billYear][billMonth] = [...acc[billYear][billMonth], bill];
      return acc;
    }, {});
  }

  private getBillMonthValues(
    billsMap: any,
    billYear: string,
    billMonth: string
  ) {
    return billsMap[billYear][billMonth].map((bill: Bill) => ({
      name: this.getMonthFromDateCode(billMonth),
      value: bill.value,
    }));
  }

  private getBillYearMonthValues(billsMap: any, billYear: string) {
    return Object.keys(billsMap[billYear]).reduce(
      (acc, billMonth) => [
        ...acc,
        ...this.getBillMonthValues(billsMap, billYear, billMonth),
      ],
      []
    );
  }

  public getBillChartData(bills: Bill[]) {
    const billsMap = this.getBillsByYearAndMonth(bills);
    return Object.keys(billsMap).map((billYear) => ({
      name: billYear,
      series: this.getBillYearMonthValues(billsMap, billYear),
    }));
  }
}
