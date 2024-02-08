import React,{useEffect} from 'react'
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux';
import {addUser, removeUser}  from '../utils/userSlice'
import { LOGO_URL } from '../utils/constants';
const Header = () => {
const navigate =useNavigate();
const dispatch =useDispatch();
const user =useSelector(store => store.user);

  const habdleSignOut =()=>{
    signOut(auth).then(() => {
 
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
      }
      
    useEffect (() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
       
          const {uid,displayName,email,photoURL} = user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          }))
        navigate("/browse")
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
       navigate("/")
        }
      });
    
    return () => unsubscribe();
    },[])
    








  return (
    <div className='flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen'>
  <img className='w-44' src={LOGO_URL}
    alt='logo'
  />
<div className='flex p-2 gap-3 h-30 w-40 cursor-pointer'>

  {/* <img className='rounded-lg h-16 w-12' src={user.photoURL} alt='userimage'/> */}
<button className='text-white bg-slate-800 p-2 rounded-lg'
onClick={habdleSignOut}
>Sign Out</button>

</div>


    </div>
    
  )
}

export default Header
