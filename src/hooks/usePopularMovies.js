import React from 'react'
import {useEffect}from 'react'

import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux"
import {addPopularMovies} from "../utils/movieSlice"
const usePopularMovies = () => {
 
  
    
        const dispatch = useDispatch();
    
        const getNowPopularMovies = async() =>{
        
          const data= await  fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
          
        const json =await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results))
        
        }
        useEffect(() => {
         getNowPopularMovies();
        }, [])
    
    
    }



export default usePopularMovies