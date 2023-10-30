
import React from 'react'
import hamburger from "../assets/header/hamburger.png"
import yt from "../assets/header/yt.png"
import mic from "../assets/header/mic.png"
import user from "../assets/header/user.png"
import search from "../assets/header/search.png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from './utils/appSlice'

const Header = () => {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='flex justify-between w-full my-2 items-center'>
        <div className='flex items-center gap-2 ml-5' >
            <img src={hamburger} alt="hamburger" className='h-4 cursor-pointer' onClick={()=>handleClick()}/>
            <a href="/">
                <img src={yt} alt="YouTube Logo" className='h-14'/>
            </a>
            
        </div>
        <div className='flex items-center w-2/4 justify-center gap-2'>
            <div className='flex items-center w-full'>
                <input type="text" placeholder='search' className='h-4 p-5 text-lg border border-gray-300 w-4/6 rounded-l-full '/>
                <div className='py-3 px-7 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200'>
                    <img src={search} alt="search" className='h-4 '/>
                </div>
                <div className='bg-gray-100 p-2.5 m-2 rounded-full hover:bg-gray-200'>
                    <img src={mic} alt="mic" className='h-5'/>
                </div>
            </div>
        </div >
        <div className='flex items-center text-blue-900 font-bold gap-2 border border-gray-300 py-1.5 px-4 rounded-full mr-7' >
            <img src={user} alt="user" className='h-5'/>
            <p>Sign In</p>
        </div>
        
    </div>
  )
}

export default Header