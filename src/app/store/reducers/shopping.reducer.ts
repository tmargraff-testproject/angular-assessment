import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { Shopping, ShoppingList } from '../models/shopping-item.model';

export interface ShoppingState {
  shopping: Array<ShoppingList>;
  loading: boolean;
  error: Error;
}
const initialState: ShoppingState = {
  shopping: new Array<ShoppingList>(),
  loading: false,
  error: undefined
};

export function ShoppingReducer(state: ShoppingState, action: ShoppingAction) {

  switch (action.type) {
    case ShoppingActionTypes.GET_SHOPPING_DATA:
      return {
        state,
        loading: true
      };
      case ShoppingActionTypes.GET_SHOPPING_DATA_SUCCESS:
        const z = 2;
        return {
          shopping: action.payload
        };

      case ShoppingActionTypes.GET_SHOPPING_DATA_FAILURE:
        return {
          state,
          error: action.payload,
          loading: false
        };
    default:
      return new Array<ShoppingList>();
  }
}
