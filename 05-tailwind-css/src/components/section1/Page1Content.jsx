import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='w-full h-screen  flex gap-1 p-10'>
        <LeftContent />
        <RightContent />
        
    </div>
  )
}

export default Page1Content