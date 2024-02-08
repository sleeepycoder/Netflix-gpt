import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='pt-60 mx-12'>
<h1 className='font-bold  text-6xl'>{title}</h1>
<p1 className="font-bold text-lg w-1/3 py-6">{overview}</p1>
<div className='m-2 p-2'>
    <button className=' bg-zinc-400 rounded-md border-black border-solid p-4'><span className='text-3xl text-black m-2 p-2'>Play🟢 </span></button>
    <button  className='m-8  bg-zinc-400 rounded-md border-black border-solid p-4 '><span className='text-3xl text-black'>More Info ℹ️ </span></button>
</div>

    </div>
  )
}

export default VideoTitle