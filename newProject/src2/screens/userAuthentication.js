import React from 'react';
import { SignInForm } from '../forms/signInForm';
import { SignUpForm } from '../forms/signUpForm';


export const UserAuthentication = () => {
  return (
    <div className='UserAuthentication'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}
