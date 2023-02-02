import React, { useCallback, useState } from 'react'
import { ShowInccrement } from './ShowInccrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback(
      () => {
          setCounter( (value) => value + 1 )
        
      },
      [],
    )
    

  return (
    <div>
        <h2> useCallbackHook: {counter} </h2>


        <ShowInccrement increment={incrementFather} />
    </div>
  )
}
