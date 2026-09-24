import React from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const myRef = useRef(20);null
  const textAreaRef = useRef()

  function handleRefChange() {
    myRef.current++;
    console.log(myRef);
    console.log(`Current Value : ${myRef.current}`);
  }
  function handleStateChange() {
    setValue((prev)=>(prev+1))
  }

  function handleTextarea() {
    textAreaRef.current.value = '';
    textAreaRef.current.focus();
  }

  return (
    <div>
      <p>Ref Value : {myRef.current} </p>
      <p>State Value : {value}</p>
      <button onClick={handleRefChange}>Change myRef.current</button>
      <button onClick={handleStateChange}>Change state value</button>
      <textarea ref={textAreaRef} name="" id="" />
      <button onClick={handleTextarea}>Clear & Focus</button>
    </div>
  );
};

export default App;
