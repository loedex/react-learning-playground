import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  console.log("Component Rendered");
  useEffect(()=>{
    console.log("Effect ran after rendering");
    
  }, []);
  
  return (
    <div>
      <h1>Check the console to see the useEffect exeution order</h1>
    </div>
  )
}

export default App