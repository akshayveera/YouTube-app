
import React from 'react'


const Button = ({name}) => {
  return (
    <div>
        <div className='py-1 px-3 m-2 bg-gray-100 text-center rounded-lg font-semibold hover:bg-gray-200 cursor-pointer'>{name}</div>
    </div>
  )
}

export default Button