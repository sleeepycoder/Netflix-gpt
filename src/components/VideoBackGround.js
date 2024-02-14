import React from 'react'
 import useGetMoviesTrailer from '../hooks/useGetMoviesTrailer'
 import { useSelector } from 'react-redux'
const VideoBackGround = (id ) => {
   useGetMoviesTrailer(id);
const trailer = useSelector((store)=>store.movies?.trailerVideo)
    return (
        <div className='m-0'>        
         <iframe className=' w-screen aspect-video '
         src={"https://www.youtube.com/embed/"+trailer +"?&autoplay=1&mute=1"}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
           </iframe>
        </div>
    )
}

export default VideoBackGround
