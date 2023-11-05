
import React from 'react'
import user from "../assets/header/user.png"

const ChatMessage = ({name, msg}) => {
  return (
    <div>
        <div className='flex gap-2 items-center my-3 px-2'>
            <img className="h-6" src={user} alt="" />
            <span className='font-bold'>{name} </span>
            <span>{msg}</span>
        </div>
    </div>
  )
}

export default ChatMessage