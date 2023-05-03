import React from "react";
import { SignInForm } from "../forms/signInForm";
import { SignUpForm } from "../forms/signUpForm";
import { useSelector } from "react-redux";

export const UserAuthentication = () => {
  const userLogged = useSelector((state) => state.userLogged);
  return (
    <div>

      {!userLogged ?
      <div className="UserAuthentication">
      <SignUpForm />
      <SignInForm />
    </div> : 
    <h1> you have successfully logged in  </h1> }
      
    </div>
  );
};
