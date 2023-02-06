import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/item.interface';

export const loadItems = createAction('[Items List] Load Items');

export const loadedItems = createAction(
  '[Items List] Loadded Succes',
  props<{ items: ItemModel[] }>()
);
