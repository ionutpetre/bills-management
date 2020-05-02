import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import Bill from './bill.entity';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  constructor(private http: HttpClient) {}

  public getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${environment.apiUrl}/bills`);
  }

  public getBillsByType(type: string): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${environment.apiUrl}/bills?type=${type}`);
  }

  createBill(bill: Bill) {
    return this.http.post<Bill>(`${environment.apiUrl}/bills`, bill);
  }
}
