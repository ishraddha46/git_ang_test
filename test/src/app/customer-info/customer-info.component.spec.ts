import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { CustomerInfoComponent } from './customer-info.component';

describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoComponent ],
      imports: [ToastrModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
