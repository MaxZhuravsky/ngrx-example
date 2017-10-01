import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  couterState: Observable<{counter: number}>;
  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit() {
    this.couterState = this.store.select('counter');
  }

}
