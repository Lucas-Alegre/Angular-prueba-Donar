import { Component, OnInit } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from '../core/models/item.interface';
import { ItemsState } from '../core/models/items.state';
import { loadedItems, loadItems } from '../state/actions/items.actions';
import {
  selectListItems,
  selectListLoading,
} from '../state/selectors/items.selectors';
import { HomeCaseServis } from './home.case.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //para poder dispachar una action en componenete debo inyectarun store
  constructor(private store: Store<any>) {}

  items = [
    { name: 'Lucas', price: 22, image: 'hhtttt' },
    { name: 'Ayelen', price: 20, image: 'aaaa' },
    { name: 'Emilio', price: 29, image: 'eeeee' },
  ];

  loading$: Observable<boolean> = new Observable();
  itemPrueba$: Observable<ItemsState> = new Observable();

  ngOnInit(): void {
    this.loading$ = this.store.select(selectListLoading);
    this.store.dispatch(loadItems());
  }
}
