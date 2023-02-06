import { state } from '@angular/animations';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemsState } from 'src/app/core/models/items.state';
import { AppState } from '../app.state';

export const selectFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectFeature,
  (state: ItemsState) => state.items
);

export const selectListLoading = createSelector(
    selectFeature,
    (state: ItemsState) => state.loading
  );
