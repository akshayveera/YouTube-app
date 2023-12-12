
import React from 'react'
import channelCheck from "../assets/channel-check.png"
import { convertCounts, getApproxTime } from './utils/helper';


const SearchVideoCard = ({info}) => {
  
    const {snippet, statistics} = info;
    const {title, thumbnails, description, channelTitle, publishedAt } = snippet;
    const {viewCount} = statistics;

    return (
    <div className='flex h-52 w-10/12 p-2 mx-2 my-1 gap-5 '>        
        <img src={thumbnails.medium.url} alt="" className='rounded-xl' />
        <div className='pt-1'>
            <div className='text-xl '>{title}</div>
            <div className='text-sm font-[490] text-gray-500'>{convertCounts(viewCount) + " views  ·  " + getApproxTime(publishedAt)}</div>
            <div className='text-sm text-[#A5A5A5] my-3 flex items-center gap-2'>
                {channelTitle}
                <img src={channelCheck} alt="" className='h-3.5'/>
            </div>
            <div className='text-sm text-gray-500 font-semibold'>{description.length>150 ? description.slice(0,150) + "..." : description}</div>
        </div>
    </div>
    )
}

export default SearchVideoCard