
import React, { useEffect, useState } from 'react'
import { closeMenu, makeMenuAbsolute, makeMenuNormal } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { YT_VIDEO_BY_ID_API } from './utils/constants';
import check from "../assets/channel-check.png"
import { convertCounts } from './utils/helper';
import share from "../assets/share.png"
import like from "../assets/sidebar/like.png"
import RelatedVideos from './RelatedVideos';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));  
  const [liveMsg, setLiveMsg] = useState("");
  const [videoInfo, setVideoInfo] = useState("not yet set");
  const [showMore, setShowMore] = useState(false);

  useEffect(()=>{
    dispatch(closeMenu());
    dispatch(makeMenuAbsolute());    

    return ()=>{
      dispatch(makeMenuNormal());
    }
  }, [])

  useEffect(()=>{
    getVideoData();
  }, [searchParams])

  const getVideoData = async ()=>{

    const data = await fetch(YT_VIDEO_BY_ID_API + searchParams.get("v"));
    const json = await data.json();

    // console.log(json?.items[0]);
    setVideoInfo(json?.items[0]);
  }


  if(videoInfo === "not yet set")
  {
    return;
  }

  const {snippet, statistics} = videoInfo;
  const {channelTitle, localized} = snippet;
  const { likeCount, viewCount} = statistics;

  

  return (
    <div className='flex ml-24 w-full h-[calc(100vh-80px)] overflow-y-scroll pl-4'>
      <div className='w-4/6'>
        <div>
          <div className=' mt-5'>
            <iframe 
              width="856" 
              height="480" 
              src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
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

        {
          showMore ? (
            <div className='bg-gray-100 mt-5 mr-12 p-5 rounded-lg'>
              {localized.description}
              <button className='font-semibold p-1 rounded-lg'
              onClick={()=>{
                setShowMore(false);
              }}>...less</button>
            </div>
          ) : (          
            <div className='bg-gray-100 mt-5 mr-12 p-5 rounded-lg'>
              {localized.description.slice(0, 235)}
              <button className='font-semibold p-1 rounded-lg'
              onClick={()=>{
                setShowMore(true);
              }}>...more</button>
            </div>
          )
        }       


        <div className='my-3 py-2'>
          <CommentsContainer videoId={searchParams.get("v") }/>
        </div>
      </div>

      <div>
        <RelatedVideos title={localized.title}/>
      </div>

    </div>
  )
}

export default WatchPage