import React, { useContext } from "react";
import { SignInForm } from "../forms/signInForm";
import { SignUpForm } from "../forms/signUpForm";
import { UserContext } from "../contexts/userContext";
import { Link } from "react-router-dom";

export const UserAuthentication = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div style={{marginTop: 60}}>
      {!currentUser ? (
        <div className="UserAuthentication">
          <SignUpForm />
          <SignInForm />
        </div>
      ) : (
        <div style ={{textAlign : 'center'}}>
          <h1 > You have successfully logged in </h1>
          <button className="btn">
            <Link className="Link" to="/products">
              Shop Here
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};
