
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const menu = useSelector((store)=>store.app.isMenuOpen)

  if(!menu) return null;

  return (
    <div className='w-48 shadow-lg'>
      <ul className='p-2 m-2'>
        <li className='font-bold'>Main</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Watch Later</li>
      </ul>
      <ul className='p-2 m-2'>
        <li className='font-bold'>Explore</li>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Watch Later</li>
      </ul>
      <ul className='p-2 m-2'>
        <li className='font-bold'>Others</li>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li> 
        <li>Watch Later</li>
      </ul>
    </div>
  )
}

export default SideBar