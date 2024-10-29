import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function useGif(tag) {


  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const [gif,setGif]=useState();  
  const [loading,setLoading]=useState(false);
  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


  async function fetchData(tag){
    try{
      setLoading(true);
      const response=await axios(tag?`${url}&tag=${tag}`:url);
      const imageSource=response.data.data.images.original.url;
      setGif(imageSource);
      setLoading(false);
    }
    catch(e){
      setLoading(false);
      console.log(e.message);
    }
  }


  useEffect(()=>{
    if(tag){ 
    fetchData(tag);
    }// eslint-disable-next-line
  },[])

  return{gif,loading,fetchData};
}
