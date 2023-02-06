import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomeCaseServis } from 'src/app/home/home.case.service';


@Injectable()
export class ItemsEffects {
 
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Items List] Load Items'),
    mergeMap(() => this.HomerCaseServis.getDataApi()
      .pipe(
        map(items => ({ type: '[Items List] Loadded Succes', items: items })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private HomerCaseServis: HomeCaseServis
  ) {}
}