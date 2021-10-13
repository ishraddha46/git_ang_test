import { Component,OnInit,Input, OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy,DoCheck, ChangeDetectorRef
} from '@angular/core';
import { CustomerService } from '../common/customer.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent implements OnInit, OnChanges {
  valueFromChild!: string;
  searchText: any;

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'edit',
    'delete',
  ];
  //dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dataSource = new MatTableDataSource();
  custList: any;

  constructor(private ref: ChangeDetectorRef,
    private customerApi: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomerList().subscribe((res) => {
      console.log(res);
      this.custList = res;
      this.dataSource = new MatTableDataSource(this.custList);
    });
    //this.searchCustomer()
  }
  searchCustomer() {
 //   this.searchText = this.valueFromChild;
    console.log(this.searchText);
    if (!this.searchText) {
      this.dataSource = new MatTableDataSource(this.custList);
      return;
    }
    let a = this.searchText.toLowerCase();
    // let searchResult=  (this.custList).filter(function(ele:any){
    //   let name = (ele.name).toLowerCase();
    //   let username = ele.username.toLowerCase();
    //   if(name.indexOf(a) !=-1|| username.indexOf(a) != -1){
    //     return ele;
    //   }
    //   })
    //   this.custList = searchResult;
    //  this.dataSource = new MatTableDataSource(this.custList);

    //  this.customerApi.getCustomerList().subscribe((res)=>{
    //   console.log(res);
    //   this.custList = res;
    //    this.dataSource = new MatTableDataSource(this.custList);
    // })

    this.customerApi
      .getCustomerList()
      .pipe(
        //   filter(Boolean),
        debounceTime(1500)
        // distinctUntilChanged(),
        // tap((event:KeyboardEvent) => {
        //   console.log(event)
        //   console.log(this.input.nativeElement.value)
        // })
      )
      .subscribe((res) => {
        let searchResult = this.custList.filter(function (ele: any) {
          let name = ele.name.toLowerCase();
          let username = ele.username.toLowerCase();
          if (name.indexOf(a) != -1 || username.indexOf(a) != -1) {
            return ele;
          }
        });
        //this.custList = searchResult;
        this.dataSource = new MatTableDataSource(searchResult);
      });
  }
  
  ngOnChanges() {
  //  this.ref.detectChanges();
    console.log('OnChanges');
   // console.log(JSON.stringify(changes));
  }
  viewCustomer(custId: string) {
    this.router.navigate(['/showCustomer', { id: custId }]);
  }
  deleteCust(custId: string) {
    this.customerApi.deleteCustomer(custId).subscribe((res) => {
      console.log(res);
      this.custList = res;
    });
  }
}
