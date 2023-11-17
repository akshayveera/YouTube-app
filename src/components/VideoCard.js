
import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {

    const { snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;

    const menu = useSelector(store => store.app.isMenuOpen)

  return (
    <div className={'p-2 m-1 ' + (menu ? 'w-96':'w-[22.5rem]')} >
        <img className={'rounded-lg ' + (menu ? 'h-56':'h-48')} src={thumbnails.medium.url} alt="" />
        <ul className='p-1'>
            <li className='font-bold overflow-hidden mb-1'>{title}</li>
            <li className='text-sm text-gray-500'>{channelTitle}</li>
            <li className='text-md text-gray-600'>{viewCount} views</li>
        </ul>
    </div>
  )
}


export default VideoCard