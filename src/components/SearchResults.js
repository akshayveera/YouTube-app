
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YT_SEARCH_LIST_API, YT_SEARCH_VIDEOS_API } from './utils/constants';
import SearchVideoCard from './SearchVideoCard';
import { useSelector } from 'react-redux';


const SearchResults = () => {

  const [videos, setVideos] = useState([]);
  // const [videoIds, setVideoIds] = useState([]);

  const menu = useSelector((store) => store.app.isMenuOpen);

  const [searchParams] = useSearchParams();
  const searchedQuery = searchParams.get("search_query");

  useEffect(()=>{

    const getSearchResults = async () => {
        let videoIds = [];

        const videoIdsData = await fetch(YT_SEARCH_LIST_API + searchedQuery);
        const videoIdsJson = await videoIdsData.json();

        if(videoIdsJson.items){
          let videoIdsList = videoIdsJson?.items?.map((item) => item.id.videoId);
          videoIds = videoIdsList;
        }

        // console.log(1);
        // console.log(videoIds);

        const videoIdsString = videoIds?.join(",");
        // console.log(2);
        // console.log(videoIdsString);

        const data = await fetch(YT_SEARCH_VIDEOS_API + videoIdsString);
        const json = await data.json();    
        
        if(json.items){
          setVideos(json.items);
        }

        // console.log(3);
        // console.log("here");
        // console.log(json.items);
    }

    if(searchedQuery) 
    {
      getSearchResults();
    }

  }, [searchedQuery])


  if(videos.length===0) return null;

  return (
    <>
    <div className={'flex flex-col w-full h-[calc(100vh-82px)] overflow-y-scroll ' + (menu ? "pl-5" : "ml-52")}>
      {videos.map( (video)=> 
      <Link key={video.id} to={"/watch?v="+video.id}>
        <SearchVideoCard info={video}/> 
      </Link>
      )}        
    </div>
    </>
    
  )
}

export default SearchResults