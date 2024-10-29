import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import errorimage from '../assets/errorimage.png'
 
export default function Random() {
    const {gif,loading,fetchData}=useGif();
  return (
    <div>
    {/* green part is below div  */}
        <div className='w-2/4 min-h-[450px] object-cover rounded-md mx-auto mt-12 bg-green-400 flex flex-col justify-center items-center gap-4'>
            <h2 className='font-bold text-center underline'>A RANDOM GIF</h2>
            {
                loading?<Spinner/>:<img src={gif?gif:errorimage} width={450} height={450} className='object-cover' alt='ranfom gif'/>
            }        
            
            
            <button onClick={fetchData} className='uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center'>GENERATE</button>
        </div>
    </div>
  )
}
