import { ShoppingActionTypes, GetShoppingSuccessAction, GetShoppingFailureAction } from './../actions/shopping.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GetShoppingDataAction } from '../actions/shopping.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';

@Injectable()
export class ShoppingEffects {

  constructor(private actions$: Actions, private shoppingService: ShoppingService) {}

  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<GetShoppingDataAction>(ShoppingActionTypes.GET_SHOPPING_DATA),
      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => new GetShoppingSuccessAction(data.shoppingList)),
            catchError(error => of(new GetShoppingFailureAction(error)))
          )
      )
    );
}
