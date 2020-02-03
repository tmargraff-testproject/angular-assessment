import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

import { AppComponent } from './app.component';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { ShoppingEffects } from './store/effects/shopping.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer
    }),
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
