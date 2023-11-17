
import React, { useEffect, useState } from 'react'
import { closeMenu, makeMenuAbsolute, makeMenuNormal } from './utils/appSlice'
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
    dispatch(makeMenuAbsolute());

    return ()=>{
      dispatch(makeMenuNormal());
    }
  }, [])

  return (
    <div className='flex ml-24 w-full h-[calc(100vh-80px)] overflow-y-scroll pl-4'>
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
        <form className='w-full my-2 flex border border-gray-200 rounded-2xl relative'
        onSubmit={
          (e)=>{
            e.preventDefault(); 
          }
        }>
          <input type="text" className='w-10/12 py-2 px-4 rounded-2xl select-none outline-none' placeholder='write here' value={liveMsg} onChange={
            (eve)=>{
              setLiveMsg(eve.target.value);
            }
          }
          />
          <button className='py-2 px-4 bg-gray-200 rounded-2xl absolute right-0' onClick={
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