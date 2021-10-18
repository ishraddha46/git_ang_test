import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../common/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { debounceTime } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent implements OnInit {
  valueFromChild!: string;
  searchText!: string;

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource();
  custList: any;

  constructor(
    private toastr: ToastrService,
    private customerApi: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerApi.getCustomerList().subscribe((res) => {
      this.custList = res;
      this.dataSource = new MatTableDataSource(this.custList);
    });
  }
  searchCustomer() {
    if (!this.valueFromChild) {
      this.dataSource = new MatTableDataSource(this.custList);
      return;
    }
    let a = this.valueFromChild.toLowerCase();

    this.customerApi
      .getCustomerList()
      .pipe(debounceTime(1000))
      .subscribe((res) => {
        let searchResult = this.custList.filter(function (ele: any) {
          let name = ele.name.toLowerCase();
          let username = ele.username.toLowerCase();
          if (name.indexOf(a) != -1 || username.indexOf(a) != -1) {
            return ele;
          }
        });
        this.dataSource = new MatTableDataSource(searchResult);
      });
  }

  viewCustomer(custId: string) {
    this.router.navigate(['/showCustomer', { id: custId }]);
  }

  deleteCust(custId: string) {
    this.customerApi.deleteCustomer(custId).subscribe((res) => {
      this.custList = res;
      this.toastr.success('Record Deleted!', 'Succsses');
    });
  }
}
