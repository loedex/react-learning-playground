import React from 'react'
import ProjectHeading from './ProjectHeading'
import ProjectTotalCount from './ProjectTotalCount'

const Header = ({ totalNotes}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between mt-5 px-7'>
      <ProjectHeading />
      <ProjectTotalCount totalNotes={totalNotes} />
    </div>
  )
}

export default Header