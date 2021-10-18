import { Component, OnInit } from '@angular/core';
import { ProdCurrencyPipe } from '../prod-currency.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  price!: string;
  price2!:string;
  componentName: any;
  constructor() {
    this.price = "179.4999";
    this.price2 = "178.4999";
 }
 
 
 
}
