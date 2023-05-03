import React, { useState } from 'react';

import {createAuthUserWithEmailAndPassword} from '../utils/firebase'

const defaultFormData= {
  displayName: '',
  email: '',
  password: '',
  confirmpassword: '',
}
export const SignUpForm = () => {

  const [formData, setFormData]= useState(defaultFormData)

  const {displayName,email,password,confirmpassword} = formData

  console.log("formData---",formData)
  const resetFormFields = () => {
    setFormData(defaultFormData);
  };
  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(password !== confirmpassword){
      alert("password and confirm password needs to be same")
      return;
    }

    try{
      const response= await createAuthUserWithEmailAndPassword(email,password)
      console.log("response",response) //user
      resetFormFields()
    }catch(error){
      console.log("error",error)

    }

  }

  const handleChange = (event)=>{

    const {name, value} = event.target// email : gargi@gmail.com

    setFormData({...formData, [name]: value})

    console.log("event",event)

  }
  return (
    <div>

    <h1>Create your account with us</h1>

    <form onSubmit={handleSubmit}>

      <div className='formField'>
       
        <input 
        type="text" name="displayName" 
        required
        id="displayName" 
        placeholder='Enter your name...'
        onChange={handleChange}
        value= {displayName}
        className='formInput'
        />
      </div>
      <div className='formField'>
      
        <input 
        type="email" name="email" 
        required
        id="email" 
        placeholder='Enter your email...'
        onChange={handleChange}
        value= {email}
        className='formInput'
        
        />
      </div>
      <div className='formField'>
        <input 
        type="password" name="password" 
        required
        id="password" 
        placeholder='Enter your password...'
        onChange={handleChange}
        value={password}
        className='formInput'
        
        />
      </div>
      <div className='formField'>
        <input 
        type="password" name="confirmpassword" 
        required
        id="confirmpassword" 
        placeholder='Confirm Password...'
        onChange={handleChange}
        value={confirmpassword}
        className='formInput'
        />
      </div>
      <button className='btn'>SignUp</button>


    </form>



    </div>
   
  )
}
