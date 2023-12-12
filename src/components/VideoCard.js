
import React from 'react'
import { useSelector } from 'react-redux';
import { convertCounts } from './utils/helper';
import { getApproxTime } from './utils/helper';

const VideoCard = ({info}) => {

    const { snippet, statistics} = info;
    const {channelTitle, thumbnails, title, publishedAt} = snippet;
    const {viewCount} = statistics;

    const menu = useSelector(store => store.app.isMenuOpen)

  return (
    <div className={'p-2 m-1 ' + (menu ? 'w-[19rem]':'w-[22.5rem]')} >
        <img className={'rounded-lg ' + (menu ? 'h-40':'h-44')} src={thumbnails?.medium?.url} alt="" />
        <ul className='p-1'>
            <li className='font-bold overflow-hidden mb-1'>{title}</li>
            <li className='text-sm text-gray-500'>{channelTitle}</li>
            <li className='text-md text-gray-600'>{convertCounts(viewCount) + " views · " + getApproxTime(publishedAt)}  </li>
        </ul>
    </div>
  )
}


export default VideoCard