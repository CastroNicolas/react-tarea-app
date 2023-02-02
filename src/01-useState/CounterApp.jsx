import React, { useState } from 'react'

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        value1:10,
        value2:20,
        value3:30,
    });

    const {value1, value2, value3} = state



    const handleSumit = () => {
        setCounter ({
            ...state,
            value1: value1 + 1,
        })

    }


  return (
    <div>   
        <h1>Counter App: {value1} </h1>
        <h1>Counter App: {value2} </h1>
        <h1>Counter App: {value3} </h1>

        <button className='btn'
        onClick={handleSumit}
        >
            +1
        </button>

    </div>
  )
}
