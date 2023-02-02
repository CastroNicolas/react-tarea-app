import React, { useLayoutEffect, useRef } from 'react'

export const Quote = ({quote, author}) => {

  const pRef = useRef()


  useLayoutEffect(() => {

    
  }, [quote])



  return (
    <div>
        <blockquote
        style={{display: 'flex'}}
        className="blockquote text-end"
        > 

                    <p className="mb-1" ref={pRef}> {quote} </p>
        
                    <footer className="blockquote-footer"> {author} </footer>
        
        </blockquote>
    </div>
  )
}
