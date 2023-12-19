import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function useGif() {
    const [gif, setGif]=useState('');
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState('');
    
    const url1=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const url2=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}`;
    async function fetchData()
    {
      setLoading(true);
      const {data}= await axios.get(search ? url2: url1);
      const imgsrc=data.data.images.downsized_large.url;
      setGif(imgsrc)
      setLoading(false);
    }

    useEffect( ()=>{
      fetchData();
    },[])

    return {gif, loading,search ,setSearch, fetchData};
}

export default useGif