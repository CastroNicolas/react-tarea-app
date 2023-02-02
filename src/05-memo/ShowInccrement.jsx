import React from 'react'

export const ShowInccrement = ({increment}) => {




  return (
    <button
    className='btn btn-primary'
    onClick={ () => {
        increment()
    }}
    >
        Increment
    </button>
  )
}
