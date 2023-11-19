
import React, { useRef, useState } from 'react'

const Demo2 = () => {

    let x = 0;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    // console.log(ref);
    // useRef returns an object like {current : 0}
    // const ref = {current : 0}

    console.log("rendering...")

  return (
    <div className=' p-2 w-96 h-96 border border-black'>
        <h1 className='text-center text-2xl font-bold m-4'>Demo of useRef() hook</h1>
        <div>
            <button 
            className='p-2 m-2 px-4 bg-red-300 rounded-xl'
            onClick={()=>{
                x= x+1;
                console.log("x = "+x);
            }}>
                increase x (let)
            </button>
            <span className='p-2 m-2 px-4 text-2xl font-bold'>x = {x}</span>
            
        </div>
        <div>
            <button 
            className='p-2 m-2 px-4 bg-red-300 rounded-xl'
            onClick={()=>{            
                setY(y+1);
            }}>
                increase y (state)
                {console.log("y = "+y)}
            </button>
            <span className='p-2 m-2 px-4 text-2xl font-bold'>y = {y}</span>
            
        </div>
        <div>
            <button 
            className='p-2 m-2 px-4 bg-red-300 rounded-xl'
            onClick={()=>{            
                ref.current = ref.current+1;
                console.log("ref = "+ref.current)
            }}>
                increase ref (useRef)
            </button>
            <span className='p-2 m-2 px-4 text-2xl font-bold'>ref = {ref.current}</span>
            
        </div>
    </div>
  )
}

export default Demo2

// Completed chapter : The end game (Namaste React) on 09-11-2023