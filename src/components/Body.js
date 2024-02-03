import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch} from 'react-redux';
import {addUser, removeUser}  from '../utils/userSlice'
const Body = () => {

const dispatch =useDispatch();

const appRouter =createBrowserRouter([
    {
        path: '/',
        element:<Login/>
    },
    {
        path:"/browse"
        ,element: <Browse />  //this is the page that will be displayed when
    }
])

useEffect (() => {



  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const {uid,displayName,email,photoURL} = user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }))
    
      // ...
    } else {
      // User is signed out
      dispatch(removeUser());
   
    }
  });


},[])


  return (
    <div>
<RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
