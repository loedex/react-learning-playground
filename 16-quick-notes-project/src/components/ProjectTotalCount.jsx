import React from 'react'
import { useRef , useEffect} from 'react'

const ProjectTotalCount = ({totalNotes}) => {
 
  return (
    <div>
        <p className='text-[15px] text-center'>Total Notes Created : <span className='underline'>{totalNotes}</span></p>
    </div>
  )
}

export default ProjectTotalCount