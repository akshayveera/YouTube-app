

import React from 'react'
import { getApproxTime, convertCounts } from './utils/helper';
import channelCheck from "../assets/channel-check.png"

const RelatedVideosCard = ({data}) => {

    console.log(data);

    const {snippet, statistics} = data;
    const {title, thumbnails, description, channelTitle, publishedAt } = snippet;
    const {viewCount} = statistics;

    // console.log(thumbnails);

    return (
        <div className='flex gap-3 w-[90%] ml-5 mt-6'>        
            <img src={thumbnails.medium.url} alt="" className='rounded-xl h-28' />
            <div className='pt-1'>
                <div className='font-semibold '>{title.slice(0, 60)}</div>
                <div className='text-sm font-[490] text-gray-500'>{convertCounts(viewCount) + " views  ·  " + getApproxTime(publishedAt)}</div>
                <div className='text-sm text-[#A5A5A5] my-3 flex items-center gap-2'>
                    {channelTitle}
                    <img src={channelCheck} alt="" className='h-3.5'/>
                </div>
            </div>
        </div>
        )
}

export default RelatedVideosCard