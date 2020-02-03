import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
// import shoppingBasketData from '../assets/shoppingitems.json';
import { Shopping } from './models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shopping: Shopping;
  jsonData = '';

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.getShoppingItems();
  }

  getShoppingItems() {
    this.dataSvc.getShoppingItems().subscribe(shopping => {
      this.shopping = shopping;
      this.calcTotals();
    });
  }

  calcTotals() {
    this.shopping.shoppingList.forEach(r => {
      r.shoppingBasket.salesTax = 0;
      r.shoppingBasket.importDuty = 0;
      r.shoppingBasket.total = 0;
      r.shoppingBasket.items.forEach(i => {
        let tax = 0;
        i.price = (i.quantity * i.price);

        if (i.isTaxable) {
          tax += i.price * .10 ;
        }

        if (i.isImported) {
          tax += i.price * .05 ;
        }
        i.price += tax;
        r.shoppingBasket.salesTax += tax;
        r.shoppingBasket.total += i.price;
      });
    });
  }

}
