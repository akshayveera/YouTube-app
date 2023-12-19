

import React, { useEffect, useState } from 'react'
import { YT_SEARCH_LIST_API, YT_SEARCH_VIDEOS_API} from './utils/constants';
import { getFirstThreeWords } from './utils/helper';
import RelatedVideosCard from './RelatedVideosCard';
import { Link } from 'react-router-dom';

const RelatedVideos = ({title}) => {

    const [videos, setVideos] = useState([]);
    let videoIds = [];

    // there is no API for youtube related vides, hence I used searchlist API with query as first three words of the video title
    
    useEffect(()=>{

        async function getRelatedvideos(title)
        {
            const query = getFirstThreeWords(title);
            // console.log(query);

            const videoIdsData = await fetch(YT_SEARCH_LIST_API + query);
            const videoIdsJson = await videoIdsData.json();

            // console.log(videoIdsJson.items);

            if(videoIdsJson.items){
                let videoIdsList = videoIdsJson?.items?.map((item) => item.id.videoId);
                videoIds = videoIdsList;
            }
            
            // console.log(videoIds);
            const videoIdsString = videoIds?.join(",");
            // console.log(videoIdsString)

            // console.log("videoIdsString : "+videoIdsString);

            const data = await fetch(YT_SEARCH_VIDEOS_API + videoIdsString);
            const json = await data.json();
        
            if(json.items){
                setVideos(json.items);
            }                 
        }

        getRelatedvideos(title);

    }, [title])

    if(videos.length === 0)
    {
        return;
    }

  return (
    <div>
        {
            videos.map((ele, i)=>{
                if(i===0) return null;
                return (
                    <Link to={"/watch?v="+ele.id}>
                        <RelatedVideosCard  data={ele} />
                    </Link>
                ) 
            })     
        }
    </div>
  )
}

export default RelatedVideos