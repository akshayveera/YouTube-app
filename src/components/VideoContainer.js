
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    // console.log(json.items);
    setVideos(json.items);
  }

  if(videos.length === 0) return null;

  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=><VideoCard info={video} key={video.id}/>)}      
    </div>
  )
}

export default VideoContainer