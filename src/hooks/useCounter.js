import { useState } from "react";

export const useCounter = (initialState = 0) => {

    const [counter, setcounter] = useState(initialState);

    const handleIncrement = (value = 1) => {
        setcounter(counter + value)
    }

    const handleReset = () => {
        setcounter(initialState)
    }

    const handleSubtract= (value = 1) => {
        // if(counter === 0) return;

        setcounter(counter - value)
    }


  return{
    counter,
    handleIncrement,
    handleReset,
    handleSubtract,
  }

}
