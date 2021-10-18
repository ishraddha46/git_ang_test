import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CustomerService } from '../common/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  custId!: string;
  form!: FormGroup;
  submitted = false;
  singleCustomerInfo:any;
  
  constructor(private toastr: ToastrService,private route:ActivatedRoute,private router:Router, private formBuilder:FormBuilder,private customerApi:CustomerService) {
    let custId =  this.route.snapshot.params['id'];
    this.getCust(custId);
   }
  getCust(custId:number){
    this.customerApi.getSingleCustomer(custId).subscribe((res:any)=>{
      console.log(res);
     console.log(res.name);
     this.singleCustomerInfo = {
      id : res.id,
      fullname : res.name,
      username : res.username,
      email : res.email
     }
     this.form.patchValue({
       id:res.id,
      fullname:res.name,
      username:res.username,
      email:res.email
     });
    })

  }
  ngOnInit(): void { 
   this.form = this.formBuilder.group(
    {
      id: ['', Validators.required],
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      email: ['', [Validators.required, Validators.email]]
      
  })
}


  get f() {
    return this.form.controls;
  }
  onReset(){
this.form.setValue(this.singleCustomerInfo);
  }
  onSubmit(){
    if(this.form.invalid){
      return;
    }
    this.submitted = true;
    console.log(this.form.value);
    let custInfo = this.form.value;
    this.customerApi.updateSingleCustomer(custInfo).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success('Record Updated!', 'Succsses');
    })
  }
}
