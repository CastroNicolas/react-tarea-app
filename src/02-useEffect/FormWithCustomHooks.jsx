import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHooks = () => {

    const {formState, onInputChange, userName, email, password, onResetForm} = useForm({
        userName: '',
        email: '',
        password: ''
    })

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
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password"
            className='form-control mt-2'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
        />


        <button 
        className='btn btn-primary mt-2'
        onClick={onResetForm}
        >
            Borrar
        </button>
        
    </>
    )
}
