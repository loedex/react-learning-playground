import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  console.log("Component Rendered");
  useEffect(()=>{
    console.log("Effect ran after rendering");
    const intervalId = setInterval(() => {
      console.log("interval line");
      
    }, 1000);

    return ()=> clearInterval(intervalId);
  }, []);
  
  return (
    <div>
      <h1>Check the console to see the useEffect exeution order</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App