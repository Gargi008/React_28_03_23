import React, { useState , useContext} from 'react';

import {signInAuthUserWithEmailAndPassword,signInWithGooglePopup,createUserDocumentFromAuth} from '../utils/firebase'
import { UserContext } from '../contexts/userContext';

const defaultFormData= {
  email: '',
  password: '',
}
export const SignInForm = () => {
  const [formData, setFormData]= useState(defaultFormData)
  const {setCurrentUser}= useContext(UserContext)

  const handleGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup()
    console.log("my google user ###############", user)
    setCurrentUser(user)
    const userDoc = await createUserDocumentFromAuth(user)
  }

  const {email,password} = formData

  console.log("formData---",formData)
  const resetFormFields = () => {
    setFormData(defaultFormData);
  };
  const handleSubmit = async (event)=>{
    event.preventDefault();
  
    try{
      const {user}= await signInAuthUserWithEmailAndPassword(email,password)
      console.log("response",user)
      setCurrentUser(user)
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

    <h1>Already have an account?</h1>
    <h3>pls signin </h3>

    <form onSubmit={handleSubmit}>

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
   
      <button className='btn'>SignIn</button>
      <button className='btn' onClick={handleGoogleUser}>Google SignIn</button>



    </form>



    </div>
   
  )
}
