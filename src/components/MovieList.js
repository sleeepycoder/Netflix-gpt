import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies );
  return (
    <div className='p-6 '>

<h1 className='font-bold text-lg  py-4'>{title}</h1>
<div className=' flex overflow-x-scroll '>
<div className=' flex gap-2 '>
{        movies &&  movies.map((movie)=>(
  <MovieCard  key={movie.id}  posterPath={movie.poster_path}/>
))}


</div>

</div>



        
    </div>
  )
}

export default MovieList