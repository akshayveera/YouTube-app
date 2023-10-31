
import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All","Movies","Songs","News","Funny","Cricket","Soccer", "Politics", "Curious", "Creative", "Education", "Music"]
  // , "Holiday", "Travel", "Painting", "Surfing", "Exciting", "Adventures"

  let key = 1;

  return (
    <div className='flex w-full'>
      {list.map((ele)=><Button name={ele} key={key++}/>)}
    </div>
    
  )
}

export default ButtonList