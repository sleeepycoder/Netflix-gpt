import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const[isSignInForm,setIsSignInForm] =useState(true);

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
      <form className='w-4/12 bg-black/80 backdrop-opacity-15 absolute p-12 my-36 mx-auto right-0 left-0 text-white '>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In" : "Sign Up"}</h1>
{!isSignInForm && (
    <input type='First name' placeholder='First Name' className='my-4 p-4 w-full bg-slate-500 rounded-md' />

)}
        <input type='email' placeholder='Email Address' className='my-4 p-4 w-full bg-slate-500 rounded-md' />

        <input type='password' placeholder='Password' className='my-4 p-4 w-full bg-slate-500 rounded-md' />

<button className='p-2 my-6 h-10 bg-red-600 w-full border border-black rounded-md hover:bg-red-800'>{isSignInForm ?"Sign In" :"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={handleSignInform}>   { isSignInForm  ? "New to netflix ?sign-up now": "Alredy Redisterd Sign In Now"}</p>
      
      </form>
      </div>
  )
}

export default Login
