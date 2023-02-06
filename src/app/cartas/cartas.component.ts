import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from '../core/models/item.interface';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
})
export class CartasComponent implements OnInit{
  item$:Observable<any> = new Observable();

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    //console.log('Soy selectore', this.item$)
  }
}
