import Spinner from './Spinner';
import useGif from '../hooks/useGif';
function Tag() {

    const {gif, loading, setSearch, search, fetchData}=useGif();

    function changeHandler(event)
    {
        setSearch(event.target.value)
    }

     return (
    <div className='w-1/2 h-[450px] bg-blue-400 rounded-2xl border border-black flex flex-col 
    items-center gap-y-5 mt-3 mb-5'>
        <h2 className='mt-3 text-2xl uppercase underline font-semibold'>Random {search} GIF</h2>
        {
          loading ? <Spinner/> : <img src={gif} alt="GIF" className='w-[450px] h-[250px] rounded-md' />
        }
        <input type="text" className='w-9/12 bg-gray-200 p-[0.4rem] text-lg rounded-lg text-center' 
        onChange={changeHandler} value={search}/>

        <button className='w-9/12 bg-gray-200 p-[0.4rem] text-lg rounded-lg mb-5' onClick={()=>fetchData()}>Generate GIF</button>
    </div>
  )
}

export default Tag