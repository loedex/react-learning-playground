import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-4'>
        <p className='bg-black text-white px-3 py-1 rounded-full uppercase'>Target Audience</p>
        <button className='bg-gray-300 px-3 py-1 tracking-wider uppercase rounded-full text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar