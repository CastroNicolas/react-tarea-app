import { useEffect, useState } from 'react'
import { Message } from './message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: '',
        email: ''

    });

    const {userName, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('Hey!')
    }, []);
    useEffect(() => {
        // console.log('email changed!')
    }, [email]); 
    
    useEffect(() => {
        // console.log('formState changed!')
    }, [formState]);

  return (
    <>
        <h1>Simple Form</h1>

        <hr/>

        <input 
            type="text"
            className='form-control'
            placeholder='User Name'
            name='userName'
            value={userName}
            onChange={onInputChange}
        />

        <input 
            type="text"
            className='form-control mt-2'
            placeholder='user@gmail.com'
            name='email'
            value={email}fd
            onChange={onInputChange}
        />

        {
            (userName === 'nico') && <Message/>
        }

    </>
  )
}
