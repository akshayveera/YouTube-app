
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { closeMenu, makeMenuAbsolute, makeMenuNormal } from './utils/appSlice';
import LiveChat from './LiveChat';
import { addMessage } from './utils/liveChatSlice';
import { YT_VIDEO_BY_ID_API } from './utils/constants';
import check from "../assets/channel-check.png"
import { convertCounts } from './utils/helper';
import share from "../assets/share.png";
import like from "../assets/sidebar/like.png";


const LivePage = () => {
  const videoId = "7uLJOIesR1Q";

  const dispatch = useDispatch();

  const [liveMsg, setLiveMsg] = useState("");
  const [videoInfo, setVideoInfo] = useState("not yet set");

  useEffect(()=>{
    dispatch(closeMenu());
    dispatch(makeMenuAbsolute());

    return ()=>{
      dispatch(makeMenuNormal());
    }
  }, [])
  

  useEffect(()=>{
    getVideoData();
  }, [])

  const getVideoData = async ()=>{

    const data = await fetch(YT_VIDEO_BY_ID_API + videoId);
    const json = await data.json();

    setVideoInfo(json?.items[0]);
    // console.log(json?.items[0]);
  }


  if(videoInfo === "not yet set")
  {
    return;
  }

  const {snippet, statistics} = videoInfo;
  const {channelTitle, description, localized, publishedAt} = snippet;
  const {commentCount, likeCount, viewCount} = statistics;


  return (
    <div className='ml-28 mt-2 flex gap-6' >
      <div className='w-4/6'>
        <div>
          <div className=' mt-5'>
            <iframe 
              width="856" 
              height="480" 
              src={"https://www.youtube.com/embed/" + videoId} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className='rounded-2xl'></iframe>
          </div>

          <div>
            <div className='text-lg font-semibold my-3'>{localized.title}</div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='font-xl font-semibold cursor-pointer'>{channelTitle}</div>
                    <img className='h-4' src={check} alt="" />
                  </div>
                  <div>
                    <div className='text-sm text-gray-500'>{convertCounts(viewCount) + " subscribers"}</div>
                  </div>
                </div>
                <div className='bg-black text-white rounded-full px-5 py-2 self-center font-semibold'> Subscribe </div>

              </div>
              <div className='flex gap-5 mr-16'>
                  <div className='bg-gray-100 px-4 py-1 flex gap-2 align-center rounded-full cursor-pointer'>
                    <img className='h-7' src={like} alt="" />
                    <div className='font-semibold relative top-1 pr-2'>{convertCounts(likeCount)}</div>
                    <div className='border-l-2 bg-gray-100 px-4 py-1'>
                      <img className='h-7 rotate-180' src={like} alt="" />
                    </div>                    
                  </div>
                  <div className='bg-gray-100 px-4 py-1 flex gap-2 align-center rounded-full cursor-pointer'>
                    <img className='h-6 self-center ' src={share} alt="" />
                    <div className='font-semibold self-center'>Share</div>
                  </div>
                  <div className='rounded-full bg-gray-100 px-3.5 text-xl font-semibold cursor-pointer'>{"..."}</div>                  
              </div>
            </div>
          </div>
        </div>
    
      </div>

      <div className=' w-full p-3 relative '>
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