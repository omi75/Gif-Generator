import React from 'react'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  return (
    <div className='flex flex-col background w-full h-screen relative overflow-x-hidden items-center'>
      <h1 className=' bg-white rounded-lg w-11/12 text-center mt-[40px] 
      py-3 px-10 text-3xl font-bold'>Random GIF's</h1>

      <div className='flex flex-col w-full justify-center items-center gap-y-10 mt-8'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App