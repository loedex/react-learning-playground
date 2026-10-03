import React from "react";
import { useState } from "react";

const NoteDescription = ({ noteDescription, setNoteDescription, limitError, setLimitError}) => {
  

  function handleDescription(e) {
    setLimitError(null);
    if(e.target.value.length > 200){
      setLimitError("Limit Exceed. You can't type more than 200 characters");
      return;
    }else{
      setNoteDescription(e.target.value);
      
    }
    setLimitError(null);
    return;
    
  }
  return (
    <>
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-blue-500  blur-3xl"> </div>
      <textarea
        className="relative z-10 bg-transparent w-full h-13 px-5 border-2 border-blue-600 "
        name=""
        id=""
        placeholder="Enter description ..."
        value={noteDescription}
        onChange={e=> handleDescription(e)}
      />
      
    </div>
    {limitError && <p className="text-red-700">{limitError}</p> }
    </>
  );
};

export default NoteDescription;
