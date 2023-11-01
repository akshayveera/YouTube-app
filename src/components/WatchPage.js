
import React, { useEffect } from 'react'
import { closeMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));  

  useEffect(()=>{
    dispatch(closeMenu());
  }, [])

  return (
    <div className='flex flex-col ml-24'>
      <div className=' mt-5'>
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
      <div className='my-3 py-2'>
        <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage