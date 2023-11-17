
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';
import AddVideoCard from './AddVideoCard';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap h-[calc(100vh-137px)] overflow-y-scroll pl-4'>
      {videos.map((video)=>{
        return(
          <Link key={video.id} to={"watch?v="+video.id}>
            <VideoCard info={video} />
          </Link>
        )
      })}      
    </div>
  )
}

export default VideoContainer