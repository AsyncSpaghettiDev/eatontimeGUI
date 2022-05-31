import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(1);
    const increase = () => setCounter(counter + 1);
    const decrease = () => {
        if (counter > 1) setCounter(counter - 1);
        else alert('No se puede decrementar más');
    }
    const reset = () => setCounter(1);
    const greaterOne = () => counter > 1;
    return{
        counter,
        increase,
        decrease,
        reset,
        greaterOne
    }
}

export default useCounter;