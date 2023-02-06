import { createReducer, on } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/item.interface';
import { ItemsState } from 'src/app/core/models/items.state';
import { loadedItems, loadItems } from '../actions/items.actions';
export const initialState: ItemsState = { loading: false, items: [] };

var it = [{ name: 'Lucas', price: 22, image: 'hhtttt' }];
export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),

  on(loadedItems, (state,{items} ) => {
    return { ...state, loading: false, items: items };
  })
);
