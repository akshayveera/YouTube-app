
import React, { useEffect, useState } from 'react'
import { closeMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addMessage } from './utils/liveChatSlice';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));  
  const [liveMsg, setLiveMsg] = useState("");

  useEffect(()=>{
    dispatch(closeMenu());
  }, [])

  return (
    <div className='flex ml-24 w-full'>
      <div className='w-4/6'>
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
      <div className=' w-full mr-24 ml-5 mt-5 p-3 '>
        <LiveChat/>
        <form className='w-full flex my-1 mx-2 p-2 border border-gray-200 rounded-2xl'
        onSubmit={
          (e)=>{
            e.preventDefault(); 
          }
        }>
          <input type="text" className='w-10/12 m-1 p-2' placeholder='write here' value={liveMsg} onChange={
            (eve)=>{
              setLiveMsg(eve.target.value);
            }
          }
          />
          <button className='m-1 py-2 px-4 bg-gray-200 rounded-2xl' onClick={
            ()=>{
              dispatch(addMessage({
                name : "Akshay",
                msg : liveMsg
              }));

              setLiveMsg("");
            }
          }>send</button>
        </form>
      </div>
    </div>
  )
}

export default WatchPage