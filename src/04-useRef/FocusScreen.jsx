import { useRef } from 'react';

export const FocusScreen = () => {
    
    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select()
    }

  return (
    <div>
        
        <h2>Focus Screen</h2>
        <hr/>

        <input
        ref={inputRef}
        className='form-control'
        type= "text"
        placeholder= 'Ingresa tu nombre'
        />

        <button
        className='btn btn-primary mt-2'
        onClick={onClick}
        >
            Set Focus
        </button>

    </div>
  )
}
