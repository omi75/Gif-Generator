import { useEffect, useState ,useCallback} from 'react'
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function useGif() {
    const [gif, setGif]=useState('');
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState('');
    
    const url1=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const url2=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}`;

    const fetchData = useCallback(async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(search ? url2 : url1);
        const imgsrc = data.data.images.downsized_large.url;
        setGif(imgsrc);
      } 
      catch (error)
      {
        console.error('Error fetching data:', error);
      } 
      finally
      {
        setLoading(false);
      }
    }, [search, url1, url2]);

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    return {gif, loading,search ,setSearch, fetchData};
}

export default useGif