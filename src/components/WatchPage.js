
import React, { useEffect } from 'react'
import { closeMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  

  useEffect(()=>{
    handleEffect();
  }, [])

  const handleEffect = ()=>{
    dispatch(closeMenu());
  }

  return (
    <div className='ml-16 mt-5'>
      <iframe 
        width="856" 
        height="480" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        className='rounded-2xl'></iframe>
    </div>
  )
}

export default WatchPage