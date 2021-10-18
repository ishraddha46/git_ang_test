import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
//import { ToastrModule } from 'ngx-toastr/public_api';

import { CustomerViewComponent } from './customer-view.component';

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewComponent ],
      imports: [ToastrModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
