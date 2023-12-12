
import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const ButtonList = () => {

  const list = ["All","Movies","Songs","News","Funny","Cricket","Soccer", "Politics", "Curious", "Creative", "Education", "Music"]
  // , "Holiday", "Travel", "Painting", "Surfing", "Exciting", "Adventures"

  const menu = useSelector(store=>store.app.isMenuOpen)


  let key = 1;

  return (
    <div className={'flex w-full pb-2 ' + (menu ? "ml-5" : "ml-11")}>
      {list.map((ele)=><Button name={ele} key={key++}/>)}
    </div>    
  )
}

export default ButtonList