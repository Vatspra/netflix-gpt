import React from 'react'
import Header from './Header'
import { useState, useRef } from "react";
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const login = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log(login, password);
    const message = checkValidData(login.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      signUpUser();
    } else {
      signInUser();
    }
  }

  const signInUser = () => {
    signInWithEmailAndPassword(auth, login.current.value,
      password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      login.current.value,
      password.current.value
    ).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    }).catch((error) => {
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className="h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />
      </div>
      <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input

            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input type='text' placeholder='Email or phone number' className="p-4 my-4 w-full bg-gray-700" ref={login}></input>
        <input type='password' placeholder='password' className="p-4 my-4 w-full bg-gray-700" ref={password}></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button type='button' className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>  {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login