import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeCaseServis {
  constructor() {}
  getDataApi(): Observable<any> {
    const data = [
      {
        name: 'Lucas Alegre',
        price: 20,
        image: 'image.htp',
      },
      {
        name: 'Ayelen Vega',
        price: 22,
        image: 'image.gggp',
      },
    ];
    return of(data).pipe(delay(1500));
  }
}
