import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './store/my.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: CounterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
