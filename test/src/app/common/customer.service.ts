import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'https://jsonplaceholder.typicode.com/'; 
  constructor(private http:HttpClient) { }

  getCustomerList(){
    return this.http.get(this.customersUrl+"users").pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('No data available!');
        }
        return res;
      }),
      retry(3) // Retry up to 3 times before failing
    );
  }
  getSingleCustomer(custId:number){
    return this.http.get(this.customersUrl+"users/"+custId);
  }
  deleteCustomer(custId:string){
    return this.http.delete(this.customersUrl+"users/"+custId).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('No data available!');
        }
        return res;
      }),
      retry(3)
    );
  }
  updateSingleCustomer(customerInfo:any){
    return this.http.put(this.customersUrl+"users/"+customerInfo.id,customerInfo).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Error while updating!');
        }
        return res;
      }),
      retry(3)
    );
  }
}
