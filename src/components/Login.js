import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const navigate =useNavigate()

    const name =useRef(null);
    const email = useRef(null)
    const password = useRef(null)
    const handleButtonClick = () => {


        const message = checkValidateData(email.current.value, password.current.value);
setErrorMessage(message);
if(message)return;
if(!isSignInForm){
//sign Up
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL:"https://avatars.githubusercontent.com/u/96768418?v=4",
      }).then(() => {
        // Profile updated!
        // ...
        navigate("/browse")
      }).catch((error) => {
        // An error occurred
        // ...
       setErrorMessage(error.message)
      });

    console.log(user);
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
setErrorMessage(errorCode + "--"+errorMessage)

    // ..
  });

}else{
 //Sign In
 signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
setErrorMessage(errorCode + "--"+errorMessage)

});

}



}
    const handleSignInform = () => {
        setIsSignInForm(!isSignInForm);
    }
  
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bgimage" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-4/12 bg-black/80 backdrop-opacity-15 absolute p-12 my-36 mx-auto right-0 left-0 text-white '>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input ref={name} type='First name' placeholder='First Name' className='my-4 p-4 w-full bg-slate-500 rounded-md' />

                )}

                <input ref={email} type='email' placeholder='Email Address' className='my-4 p-4 w-full bg-slate-500 rounded-md' />


                <input ref={password} type='password' placeholder='Password' className='my-4 p-4 w-full bg-slate-500 rounded-md' />
                <label>{errorMessage}</label>
                <button className='p-2 my-6 h-10 bg-red-600 w-full border border-black rounded-md hover:bg-red-800' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={handleSignInform}>   {isSignInForm ? "New to netflix ?sign-up now" : "Alredy Redisterd Sign In Now"}</p>

            </form>
        </div>
    )
}

export default Login
