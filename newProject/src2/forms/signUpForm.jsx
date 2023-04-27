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



  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(password !== confirmpassword){
      alert("password and confirm password needs to be same")
      return;
    }

    try{
      const response= await createAuthUserWithEmailAndPassword(email,password)
      console.log("response",response)
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

    <h1>create your account</h1>

    <form onSubmit={handleSubmit}>

      <div>
        <label>Enter your Name</label>
        <input 
        type="text" name="displayName" 
        required
        id="displayName" 
        placeholder='Enter your name...'
        onChange={handleChange}
        value= {displayName}
        />
      </div>
      <div>
        <label>Enter your Email</label>
        <input 
        type="email" name="email" 
        required
        id="email" 
        placeholder='Enter your email...'
        onChange={handleChange}
        value= {email}
        
        />
      </div>
      <div>
        <label>Ente your Password</label>
        <input 
        type="password" name="password" 
        required
        id="password" 
        placeholder='Enter your password...'
        onChange={handleChange}
        value={password}
        
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input 
        type="password" name="confirmpassword" 
        required
        id="confirmpassword" 
        placeholder='Confirm Password...'
        onChange={handleChange}
        value={confirmpassword}
        />
      </div>
      <button>SignUp</button>


    </form>



    </div>
   
  )
}
