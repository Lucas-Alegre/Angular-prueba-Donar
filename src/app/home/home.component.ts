import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from '../core/models/item.interface';
import { ItemsState } from '../core/models/items.state';
import { loadedItems, loadItems } from '../state/actions/items.actions';
import {
  AuthSelector,
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

  public isLoading$():Observable<boolean>{
   
    return this.store.select(AuthSelector.isLoading)
  }

  loading$: Observable<boolean> = new Observable();
  itemPrueba$: Observable<ItemsState> = new Observable();

  ngOnInit(): void {
    debugger
    this.loading$.subscribe(res => {console.log(res)})
    this.loading$ = this.store.select(AuthSelector.isLoading);
    
    this.store.dispatch(loadItems());

    console.log('Esto es loading observable', this.isLoading$())
  }
}
