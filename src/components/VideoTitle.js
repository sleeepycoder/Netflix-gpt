import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='pt-44 mx-8 absolute text-white w-screen  '>
<h1 className='font-bold mx-10 text-6xl'>{title}</h1>
<p className="font-bold mx-10 text-lg w-1/3 py-6">{overview}</p>
<div className='m-2 p-2'>
    <button className=' bg-slate-300 text-black rounded-md border-black border-solid p-4 px-12 bg-opacity-90'>▶️Play </button>
    <button  className='mx-2  bg-zinc-300 text-black rounded-md border-black border-solid p-4 px-12 bg-opacity-90'>ℹ️ More Info </button>
</div>

    </div>
  )
}

export default VideoTitle