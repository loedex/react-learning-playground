import React from 'react'

const App = () => {

  return (
    <div>
      <button className='bg-amber-400 p-10 rounded-full m-10' onClick={function(elem){
        console.log("Button Clicked howa");
        console.log(elem);
        
        
      }}> Click Me</button>
    </div>
  );
}

export default App