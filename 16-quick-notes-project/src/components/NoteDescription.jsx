import React from "react";
import { useState } from "react";

const NoteDescription = ({ noteDescription, setNoteDescription }) => {
  const [limitError, setLimitError] = useState(null);

  function handleDescription(e) {
    if(e.target.value.length > 200){
      setLimitError("Limit Exceed. You can't type more than 200 characters");
      return;
    }else{
      setNoteDescription(e.target.value);
    }
    
  }
  return (
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
      {limitError && <p className="text-red-700">{limitError}</p> }
    </div>
  );
};

export default NoteDescription;
