
import React from 'react'
import { memo } from 'react'

export const Small = memo(({value}) => {
  return (
    <div>
         <small> {value} </small>
    </div>
  )
})
