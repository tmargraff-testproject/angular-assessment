import { AppState } from './store/models/app-state.model';
import { ShoppingService } from './services/shopping.service';
import { Component, OnInit } from '@angular/core';
import { Shopping, ShoppingList } from './store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GetShoppingDataAction } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shopping: Shopping;
  shoppingList$: Observable<Array<ShoppingList>>;

  // tslint:disable-next-line:ban-types
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>, private dataSvc: ShoppingService) { }

  ngOnInit() {
    this.shoppingList$ = this.store.select(store => store.shopping.shopping);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
    this.store.dispatch(new GetShoppingDataAction());

    // observable (ngrx) not working so just make the http call and do the calculations
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

  saveData() {
    localStorage.setItem('shoppingList', JSON.stringify(this.shopping));
  }

}
