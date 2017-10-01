import { CounterActions, INCREMENT_COUNT } from './my.actions';



const initialState = {
  counter: 0
};

export function CounterReducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    case INCREMENT_COUNT:
      const counter = state.counter + 1;
      return {
        ...state,
        counter
      };
    default:
      return state;
  }
}
