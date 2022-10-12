import { useState } from 'react';


export const useCounter = ( inicialState = 10 ) => {
  
    const [counter, setCounter] = useState(inicialState);

    const reset = () => {
        setCounter( inicialState );
    }

    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value );
    }
    
    const decrement = ( value = 1) => {
        setCounter( (current) => current - value );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
