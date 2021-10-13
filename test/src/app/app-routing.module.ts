import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { HomeComponent } from './home/home.component';
import { TestFormComponent } from './test-form/test-form.component';
const routes: Routes = [
  { path: '', component: CustomerViewComponent, pathMatch: 'full' },
  {
    path: 'customerList',
     component: CustomerViewComponent,
   },
  {
   // path: 'showCustomer/:mode/:id',
   path: 'showCustomer/:id',
    component: CustomerInfoComponent,
  },{
    path: 'home',
     component: HomeComponent,
   },{
    path: 'testForm',
     component: TestFormComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
