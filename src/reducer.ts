import {
    CounterDispatchTypes,
    CounterState,
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
} from './types';

export const initialState:CounterState = {
    counter: 0,
};

export const counterReducer = (
    state:CounterState = initialState, 
    action: CounterDispatchTypes,
) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                counter: state.counter+1,
            }
        case DECREMENT_COUNTER:
            return{
                counter: state.counter - 1,
            }
        default:
            return state.counter;
    }
}