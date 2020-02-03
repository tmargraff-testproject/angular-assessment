import { Action } from '@ngrx/store';
import { Shopping, ShoppingList } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  GET_SHOPPING_DATA = '[SHOPPING] Get Shopping Data',
  GET_SHOPPING_DATA_SUCCESS = '[SHOPPING] Get Shopping Data Success',
  GET_SHOPPING_DATA_FAILURE = '[SHOPPING] Get Shopping Data Failure',
}

export class GetShoppingDataAction implements Action {
  readonly type = ShoppingActionTypes.GET_SHOPPING_DATA;
}

export class GetShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.GET_SHOPPING_DATA_SUCCESS;

  constructor(public payload: Array<ShoppingList>) {
    console.log(payload);
  }
}

export class GetShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.GET_SHOPPING_DATA_FAILURE;

  constructor(public payload: Error) {}
}

export type ShoppingAction = GetShoppingDataAction | GetShoppingSuccessAction | GetShoppingFailureAction;

