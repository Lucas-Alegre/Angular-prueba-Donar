import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from '../core/models/item.interface';
import { AppState } from '../state/app.state';
import { selectListItems } from '../state/selectors/items.selectors';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
})
export class CartasComponent implements OnInit{
  items$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.items$= this.store.select(selectListItems)
    console.log('Soy selectore', this.items$)
  }
}
