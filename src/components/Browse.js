import React from 'react'
import Header from './Header'
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)

useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
  return (
    <div className=''>
    <Header/>
{showGptSearch ? <GptSearch/> :
    <><MainContainer />
    <SecondaryContainer />
    </>
     }
    </div>
  )
}

export default Browse