import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./types";

export const increase = ()=>{
    return{
        type: INCREMENT_COUNTER,
    }
};

export const decrease = ()=>{
    return{
        type: DECREMENT_COUNTER,
    }
};