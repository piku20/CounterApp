export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export interface CounterState{
    counter: number;
};

export interface CounterDispatchTypes{
    type: string;
    data?: number;
}