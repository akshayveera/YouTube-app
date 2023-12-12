
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { closeMenu, makeMenuAbsolute, makeMenuNormal } from './utils/appSlice';
import LiveChat from './LiveChat';
import { addMessage } from './utils/liveChatSlice';

const LivePage = () => {
  const videoId = "7uLJOIesR1Q";

  const dispatch = useDispatch();

  const [liveMsg, setLiveMsg] = useState("");

  useEffect(()=>{
    dispatch(closeMenu());
    dispatch(makeMenuAbsolute());

    return ()=>{
      dispatch(makeMenuNormal());
    }
  }, [])


  return (
    <div className='ml-28 mt-6 flex gap-6' >
      <div>
        <iframe 
          width="856" 
          height="480" 
          src="https://www.youtube.com/embed/7uLJOIesR1Q?si=f6GRm7To1Ix7E6M9" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className='rounded-2xl'>          
        </iframe>
      </div>

      <div className=' w-full p-3 relative -top-3'>
        <h1 className='text-lg font-semibold mb-2 ml-3'>Live Chat</h1>
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

export default LivePage