import React from 'react'

const NoteDescription = () => {
  return (
   <div className='relative overflow-hidden w-full'>
    <div className='absolute inset-0 bg-blue-500  blur-3xl'> </div>
        <textarea className='relative z-10 bg-transparent w-full h-13 px-5 border-2 border-blue-600 ' name="" id="" placeholder='Enter description ...'/>
    
   </div>
  )
}

export default NoteDescription