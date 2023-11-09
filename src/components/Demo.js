
import React,{useState, useMemo} from 'react'
import {nthPrime} from './utils/helper';


const Demo = () => {

  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // console.log("rendering");
  
  const prime = useMemo(()=>nthPrime(num), [num]);
  // below line is same as above code without memoization
  // const prime = nthPrime(num);

  return (
    <div className={"w-96 h-96 p-5 border border-black " + (isDarkTheme && "bg-gray-700")}>
      <h1 className='text-center text-2xl font-bold mb-4'>Demo of useMemo() hook</h1>
      <input className='border border-black p-2' type="number" value={num} onChange={(e)=>setNum(e.target.value)} /> 
      <div className='border border-black my-3 p-2'>nth prime : {prime}</div>
      <button className='p-2 px-5 m-2 bg-blue-200 rounded-2xl' onClick={()=>setIsDarkTheme(!isDarkTheme)}>toggle</button>
    </div>
  )
}

export default Demo