
import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const { snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;

  return (
    <div className='w-80 p-2 m-2'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
        <ul className='p-1'>
            <li className='font-bold overflow-hidden mb-1'>{title}</li>
            <li className='text-sm text-gray-500'>{channelTitle}</li>
            <li className='text-md text-gray-600'>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard