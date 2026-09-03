import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);
  console.log("Component Rendered");

  useEffect(()=>{
    console.log("Searching for : ", searchText);
    
  }, [searchText, count]);
  
  return (
    <div>
      <h1>Check the console to see the useEffect exeution order</h1>
      <input type="text" placeholder='Search keywords ...' value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h1>Current Count : {count}</h1>

    </div>
  )
}

export default App