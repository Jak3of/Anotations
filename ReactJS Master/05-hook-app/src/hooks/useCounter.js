import { useState } from "react";




export const useCounter = (initialValue = 10) => {

    const [counter, setCounter]=useState(initialValue);

    const increment = (value = 1) => setCounter(count => count + value);

    const decrement = (value = 1) => counter < 1 ? 0 : setCounter( count => count - value);

    const reset = () => setCounter(initialValue);
    

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

