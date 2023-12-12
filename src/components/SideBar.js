
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import home from "../assets/sidebar/home.png"
import subscribe from "../assets/sidebar/subscribe.png"
import shorts from "../assets/sidebar/shorts.png"
import rightArrow from "../assets/sidebar/right-arrow.png"
import downArrow from "../assets/sidebar/down-arrow.png"
import like from "../assets/sidebar/like.png"
import watchLater from "../assets/sidebar/watch-later.png"
import history from "../assets/sidebar/history.png"
import akshay from "../assets/sidebar/akshay.jpg"
import love from "../assets/sidebar/love.jpg"
import anuj from "../assets/sidebar/anuj.jpg"
import harry from "../assets/sidebar/harry.jpg"
import codehelp from "../assets/sidebar/codehelp.jpg"
import settings from "../assets/sidebar/settings.png"
import feedback from "../assets/sidebar/feedback.png"
import help from "../assets/sidebar/help.png"
import flag from "../assets/sidebar/flag.png"
import live from "../assets/sidebar/live.png"


const SideBar = () => {

  const menu = useSelector((store)=>store.app.isMenuOpen)
  const isMenuAbsolute = useSelector((store)=>store.app.isMenuAbsolute)

  if(!menu) return null;

  return (
    <div className={'w-64 h-[calc(100vh-80px)] no-scrollbar overflow-y-scroll  '+ ( isMenuAbsolute? ' absolute bg-white' : '')} >
      
      <ul className='p-2 m-2 border-b pb-4'>
        <Link to="/">
          <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '>
            <img src={home} alt="home logo" className='h-6'/>
            Home
          </li>
        </Link>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer'> 
          <img src={shorts} alt="home logo" className='h-6' />
          Shorts
        </li>
        <Link to="live">
          <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer'>
            <img src={live} alt="home logo" className='h-6'/>
            Live
          </li>
        </Link>  
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-2 cursor-pointer'> 
          <img src={subscribe} alt="home logo" className='h-6' />
          Subscription
        </li>
      </ul>

      <ul className='p-2 m-2 border-b pb-2'>
        <li className='flex gap-1 text-lg items-center font-semibold mb-1'>You <img src={rightArrow} alt="" className='h-5' /></li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={history} alt="home logo" className='h-6' />
          History
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={watchLater} alt="home logo" className='h-6' />
          Watch Later
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={like} alt="home logo" className='h-6' />
          Liked
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={downArrow} alt="home logo" className='h-6' />
          Show more
        </li>
      </ul>

      <ul className='p-2 m-2 border-b '>
        <li className='text-lg font-semibold pb-2 '>Subscriptions</li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={akshay} alt="home logo" className='h-7 rounded-full' />
          Akshay Saini
        </li><li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer'> 
          <img src={love} alt="home logo" className='h-7 rounded-full' />
          Love Babbar
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer'> 
          <img src={anuj} alt="home logo" className='h-7 rounded-full' />
          Anuj Bhaiya
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={harry} alt="home logo" className='h-7 rounded-full' />
          Code with harry
        </li>
        <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={codehelp} alt="home logo" className='h-7 rounded-full' />
          Codehelp
        </li>
      </ul>

      <ul className='p-2 m-2 border-b'>
      <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
          <img src={settings} alt="home logo" className='h-6' />
          Settings
      </li>
      <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
        <img src={flag} alt="home logo" className='h-6' />
        Report history
      </li>
      <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
        <img src={help} alt="home logo" className='h-6' />
        Help
      </li>
      <li className='flex gap-5 w-full hover:bg-gray-100 rounded-lg py-2 pr-2 pl-4 my-1 cursor-pointer '> 
        <img src={feedback} alt="home logo" className='h-6' />
        Send Feedback
      </li>
      </ul>
      
    </div>
  )
}

export default SideBar