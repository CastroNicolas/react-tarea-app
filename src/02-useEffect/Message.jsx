import React from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Message Mounted')

        return () => {
            console.log('Message Unmounted')
        };
    }, []);

  return (
    <div>

        <h3 className='mt-2'>El usuario ya esta creado!</h3>


    </div>
  )
}
