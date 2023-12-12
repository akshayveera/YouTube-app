
import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const menu = useSelector(store => store.app.isMenuOpen)

  return (
    <div className={menu ? 'w-[84%]' : 'w-full'}>
        <ButtonList/>
        <VideoContainer />
    </div>
  )
}

export default MainContainer