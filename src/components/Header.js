
import React, { useEffect, useState } from 'react'
import hamburger from "../assets/header/hamburger.png"
import yt from "../assets/header/yt.png"
import mic from "../assets/header/mic.png"
import user from "../assets/header/user.png"
import search from "../assets/header/search.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu , openMenu} from './utils/appSlice'
import { YT_SEARCH_SUGGEST_API} from "./utils/constants"
import { cacheResults } from './utils/searchSlice'
import { Link } from 'react-router-dom'
import { userNotSearched, userSearched } from './utils/searchResultsSlice'

const Header = () => {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toggleMenu());
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const searchCache = useSelector((store)=>store.search);
    const searchEmpty = useSelector((store)=>store.searchResults.isSearchEmpty);

    console.log()

    useEffect(()=>{

        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        }, 200);                

        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YT_SEARCH_SUGGEST_API + searchQuery)
        const json = await data.json();

        setSuggestions(json[1]);

        dispatch(
            cacheResults(
                {[searchQuery]:json[1]}
            )
        );
    }


  return (
    <div className='flex justify-between w-full my-2 items-center '>
        <div className='flex items-center gap-2 ml-5' >
            <img src={hamburger} alt="hamburger" className='h-5 cursor-pointer' onClick={()=>handleClick()}/>
            <Link to="/">
                <img src={yt} alt="YouTube Logo" className='h-16' onClick={()=>{
                    dispatch(openMenu());
                }}/>
            </Link>
            
        </div>
        <div className="w-2/4 gap-2">
            <div className='flex items-center w-full '>
                <input type="text" placeholder='search' className='h-4 p-5 pl-8 text-base border border-gray-300 w-4/6 rounded-l-full '
                    value = {searchQuery}
                    onChange={(eve)=>{
                        if(eve.target.value === ""){
                            dispatch(userNotSearched());
                        }else{
                            dispatch(userSearched());
                        }

                        setSearchQuery(eve.target.value);
                    }}
                    onFocus={()=>setShowSuggestion(true)}
                    onBlur={()=>setTimeout(()=>{setShowSuggestion(false)}, 300)}                    
                />
                {
                    searchEmpty ? (
                        <button className='py-3 px-7 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 cursor-pointer'>
                            <img src={search} alt="search" className='h-4 '/>
                        </button>
                    ) : (
                        <Link to={"/results?search_query=" + searchQuery}>
                            <button 
                            className='py-3 px-7 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200'
                            >
                                <img src={search} alt="search" className='h-4 '/>
                            </button>
                        </Link>
                    )
                }
                <div className='bg-gray-100 p-2.5 m-2 rounded-full hover:bg-gray-200'>
                    <img src={mic} alt="mic" className='h-5'/>
                </div>                
            </div>
            {suggestions.length===0 ? null : showSuggestion && (
                <div className='fixed top-14  bg-white w-4/12 p-2 m-1 shadow-xl rounded-xl border border-gray-300'>
                    <ul >
                        {suggestions.map((s)=>{        
                            return(
                                <Link key={s} to={"/results?search_query=" + s} onClick={()=>{
                                    setSearchQuery(s);
                                }} >
                                    <li  className="flex items-center gap-3 px-2 rounded-xl hover:bg-gray-100"><img className='h-3' src={search} alt=""/><span className='mb-1'>{s}</span> </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div >
        <div className='flex items-center text-blue-900 font-bold gap-2 border border-gray-300 py-1.5 px-4 rounded-full mr-7' >
            <img src={user} alt="user" className='h-5'/>
            <p>Sign In</p>
        </div>
        
    </div>
  )
}

export default Header