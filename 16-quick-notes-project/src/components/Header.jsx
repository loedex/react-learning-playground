import React from 'react'
import ProjectHeading from './ProjectHeading'
import ProjectTotalCount from './ProjectTotalCount'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between mt-5 px-7'>
      <ProjectHeading />
      <ProjectTotalCount />
    </div>
  )
}

export default Header