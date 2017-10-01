import { Action } from '@ngrx/store';

export const INCREMENT_COUNT = 'INCREMENT_COUNT';


export class IncrementCount implements Action {
  readonly type = INCREMENT_COUNT;
}


export type CounterActions = IncrementCount;
