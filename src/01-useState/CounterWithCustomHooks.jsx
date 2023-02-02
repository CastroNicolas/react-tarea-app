import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHooks = () => {

    const {counter, handleIncrement, handleReset, handleSubtract} = useCounter();


    return (
    <div>

    <h1>Counter with hooks: {counter} </h1>

    <hr/>

    <button className='btn btn-primary'
    onClick={ () => handleIncrement(1)}
    > +1 </button>

    <button className='btn btn-primary'
    onClick={handleReset}
    > Reset </button>

    <button className='btn btn-primary'
    onClick={ () => handleSubtract(1)}
    > -1 </button>

    </div>
  )
}
