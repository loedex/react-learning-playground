import React from 'react'
import Card from './Card';
import Navbar from './Navbar';
const Header = () => {
  return (
    <>
        <Navbar />
        <div className='parent'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        
        
    </>
  );
}

export default Header