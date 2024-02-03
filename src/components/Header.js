import React from 'react'
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
const navigate =useNavigate();
const user =useSelector(store => store.user)
  const habdleSignOut =()=>{
signOut(auth).then(() => {
navigate("/")
}).catch((error) => {
  // An error happened.
  console.log(error);
});
}


  return (
    <div className='flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen'>
  <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='logo'
  />
<div className='flex p-2 gap-3 h-30 w-40 cursor-pointer'>

  <img className='rounded-lg h-16 w-12' src={user.photoURL} alt='userimage'/>
<button className='text-white bg-slate-800 p-2 rounded-lg'
onClick={habdleSignOut}
>Sign Out</button>

</div>


    </div>
    
  )
}

export default Header
