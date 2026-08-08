import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className=' w-2/3 flex gap-4'>
        <RightCard  imgSrc="third.jpg"/>
        <RightCard name="Underserved" imgSrc="/second.jpg"/>
        <RightCard name="Underbanked" imgSrc="/first.jpg"/>
    </div>
  )
}

export default RightContent