import React from 'react'
import FooterLengthLimit from './FooterLengthLimit'
import FooterSubmitButton from './FooterSubmitButton'

const NoteFormFooter = ({noteDescription, noteTitle}) => {
  return (
    <div className='flex justify-between px-5'>

        <FooterLengthLimit noteDescription={noteDescription} />
        <FooterSubmitButton />
        
        </div>
  )
}

export default NoteFormFooter