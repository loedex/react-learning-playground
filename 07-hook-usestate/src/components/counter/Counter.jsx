import React from 'react';
import {useState} from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count+1);
    }
    function handleDecrement() {
        setCount(count-1);  
    }
    function handleReset() {
        setCount(0);
        
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='bg-amber-800 text-white font-bold text-3xl p-2 rounded-md'>Count : {count}</h1>
        <div className='flex gap-10 mt-5'>
            <button className='bg-black text-white py-1 px-3 rounded-full font-semibold cursor-pointer' onClick={handleIncrement}>Increment</button>
            <button className='bg-black text-white py-1 px-3 rounded-full font-semibold cursor-pointer' onClick={handleDecrement}>Decrement</button>
        </div>
        <button className='bg-red-500 text-white font-semibold py-1 px-3 rounded-full mt-5 cursor-pointer' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter