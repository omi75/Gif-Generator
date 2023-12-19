import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
    
  const {gif, loading, fetchData}=useGif();

  return (
    <div className='w-1/2 h-[450px] bg-green-400 rounded-2xl border border-black flex flex-col 
    items-center gap-y-5 mt-3'>
        <h2 className='mt-3 text-2xl uppercase underline font-semibold'>A Random GIF</h2>
        {
          loading ? <Spinner/> :<img src={gif} alt="GIF" className='w-[450px] h-[300px] rounded-md' />
        }
        <button className=' w-9/12 bg-gray-200 p-[0.4rem] text-lg rounded-lg' onClick={()=> fetchData()}>Generate GIF</button>
    </div>
  )
}

export default Random