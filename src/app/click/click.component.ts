import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions, INCREMENT_COUNT, IncrementCount } from '../store/my.actions';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit() {
  }
  incrementCount() {
    console.log('inc');
    this.store.dispatch(new IncrementCount());
  }
}
