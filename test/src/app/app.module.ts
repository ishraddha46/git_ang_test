import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TestFormComponent } from './test-form/test-form.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService} from '../app/common/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import {MatTableModule} from '@angular/material/table';
import { SearchComponent } from './search/search.component';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TestFormComponent,
    CustomerViewComponent,
    CustomerInfoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    ToastrModule.forRoot()
  ], 
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
