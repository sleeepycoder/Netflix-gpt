import React, { useEffect, useState } from 'react'
import { API_OPTIONS, VIDEO_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';



const useGetMoviesTrailer = ({id}) => {
    const dispatch =useDispatch();
    

    const getMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, API_OPTIONS)
        const json = await data.json();
    
        const trailerData = json.results.filter(video => video.type === "Trailer")
        const trailer = trailerData.length ? trailerData[0] : json.results;
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer.key));
    }
    useEffect(() => {
        getMoviesVideo();
    }, [])




}

export default useGetMoviesTrailer