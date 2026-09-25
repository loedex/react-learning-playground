import React from 'react'
import NoteTitle from './NoteTitle'
import NoteDescription from './NoteDescription'

const NoteForm = () => {
  return (
    <div className='px-5 mt-5'>
        <form action="" className='flex flex-col w-full gap-2 ' >
            <NoteTitle />
            <NoteDescription />
        </form>
    </div>
  )
}

export default NoteForm