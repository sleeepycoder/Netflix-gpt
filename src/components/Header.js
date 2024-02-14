import React,{useEffect} from 'react'
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux';
import {addUser, removeUser}  from '../utils/userSlice'
import { LOGO_URL } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
const Header = () => {
const navigate =useNavigate();
const dispatch =useDispatch();
const user =useSelector(store => store.user);
// console.log(user);


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
    
const handleGptSearchToggle =() =>{
dispatch(toggleGptSearchView());

};







  return (
    <div className='flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen'>
  <img className='w-44' src={LOGO_URL}
    alt='logo'
  />

<div className='flex p-2  cursor-pointer'>
<select>
{SUPPORTED_LANGUAGES.map((lang ,index)=>(
<option key={lang.identifier} value={lang.identifier}
className='p-2 bg-gray-500'
>{lang.name}</option>

))}
</select>


<button className='text-white mx-4 px-4 bg-purple-800 rounded-lg mx-2'
onClick={handleGptSearchToggle}
>Gpt Search</button>
  {/* <img className='rounded-lg h-16 w-12' src={user.photoURL} alt='userimage'/> */}
<button className='text-white bg-slate-800 px-2 rounded-lg'
onClick={habdleSignOut}
>{user ? "Signout" :"SignIn"}</button>

</div>


    </div>
    
  )
}

export default Header
