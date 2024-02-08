import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {

    const movies =useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies === null) return;
    console.log(movies);
    const mainMovie =movies[0];
    // console.log(mainMovie);
  const {original_title,overview} = mainMovie;
  return (
    <div>
   <VideoTitle title ={original_title} overview ={overview}/>
   <VideoBackGround/>
  
    </div>
  )
}

export default MainContainer