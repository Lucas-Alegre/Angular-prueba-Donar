import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { itemsReducer } from './state/reducers/items.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { CartasComponent } from './cartas/cartas.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/Items.Effect';

@NgModule({
  declarations: [AppComponent, HomeComponent, CartasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([ItemsEffects  ] ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
