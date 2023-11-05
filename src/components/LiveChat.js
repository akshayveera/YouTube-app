
import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/liveChatSlice'
import { generateRandomName, generateRandomString } from './utils/helper'

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.liveChat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name : generateRandomName(),
                msg : generateRandomString(20)
            }))

        }, 1000)

        return ()=>{
            clearInterval(i);
        }
    }, [])

  return (
    <div className='bg-gray-100 rounded-lg h-[480px] flex flex-col-reverse overflow-y-scroll'>
        {chatMessages.map( (chatMsg, idx) => <ChatMessage key={idx} name={chatMsg.name} msg={chatMsg.msg}/>  )}  
    </div>
  )
}

export default LiveChat