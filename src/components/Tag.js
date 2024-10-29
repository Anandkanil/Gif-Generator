import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import errorimage from '../assets/errorimage.png'


export default function Tag() {

    
    const [tag,setTag]=useState("cute cats");
    const {gif,loading,fetchData}=useGif(tag);  

  return (
    <div>
    {/* green part is below div  */}
        <div className='w-2/4 min-h-[450px] object-cover rounded-md mx-auto mt-12 bg-blue-400 flex flex-col justify-center items-center gap-4'>
            <h2 className='font-bold text-center underline'>RANDOM GIF</h2>
            {
                loading?<Spinner/>:<img src={gif?gif:errorimage} width={450} height={450} className='object-cover' alt='ranfom gif '/>
            }
           
            
            <input type="text" value={tag} onChange={(e)=>{ setTag(e.target.value);}} className="w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center" />
            <button onClick={fetchData} className='uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center'>GENERATE</button>
        </div>
    </div>
  )
}
