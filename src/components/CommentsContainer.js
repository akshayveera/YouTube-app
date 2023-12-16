
import React, { useEffect, useState } from 'react'
import { YT_COMMENTS_API } from './utils/constants';
import { getApproxTime } from './utils/helper';

const CommentCard = ({data})=>{
    
    const commentInfo = data?.snippet?.topLevelComment?.snippet;

    const {authorDisplayName ,authorProfileImageUrl, textDisplay, publishedAt } = commentInfo;

    return(
        <div className='flex gap-5 mx-2 my-8'>
            <img className='rounded-full h-10' src={authorProfileImageUrl} alt="" />
            <div>
                <div className='flex items-center'>
                    <div className='text-sm font-semibold'>{authorDisplayName}</div>
                    <div className='text-xs text-gray-400 ml-2'>{ " · " + getApproxTime(publishedAt)}</div>
                    
                </div>
                <div>{textDisplay}</div>
            </div>
        </div>
    )
}

const CommentsContainer = ({videoId}) => {

    const [commentsData, setCommentsData] = useState([]);

    useEffect(()=>{
        getComments();
    }, [videoId]);

    const getComments = async ()=>{

        const data = await fetch(YT_COMMENTS_API + videoId);
        const json = await data.json();

        setCommentsData(json.items);
    }

    if(commentsData === undefined)
    {
        return;
    } 

  return (
    <div>
        <div className='text-2xl ml-4 font-bold'>Comments</div>
        {
            commentsData.map((ele)=>{
                return <CommentCard key={ele.id} data={ele}/>
            })
        }        
    </div>
  )
}

export default CommentsContainer