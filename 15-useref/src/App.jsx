import React from 'react'
import { useRef } from 'react'

const App = () => {
  const myRef = useRef(20);
  myRef.current = 50;
  console.log("abc",myRef.current);
  
  return (
    <div>{myRef.current}</div>
  )
}

export default App