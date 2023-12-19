
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    if(json.items){
      setVideos(json?.items);
    }
  }

  const menu = useSelector(store => store.app.isMenuOpen)

  if(videos?.length === 0) return null;

  return (
    <div className={'flex flex-wrap justify-evenly h-[calc(100vh-137px)] overflow-y-scroll  no-scrollbar ' + ( menu ? "ml-4" : "ml-10")} >
      {videos?.map((video)=>{
        return(
          <Link key={video?.id} to={"watch?v="+video?.id}>
            <VideoCard info={video}/>
          </Link>
        )
      })}      
    </div>
  )
}

export default VideoContainer