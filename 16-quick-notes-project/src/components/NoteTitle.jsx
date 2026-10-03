import React from "react";
import { useRef , useEffect } from "react";

const NoteTitle = ({ noteTitle, setNoteTitle, focusTrigger }) => {
  const titleRef = useRef(null);
  useEffect(()=>{
    titleRef.current.focus();
  },[focusTrigger])
  return (
    <div className="w-full ">
      <input
        ref={titleRef}
        type="text"
        value={noteTitle}
        onChange={e=> setNoteTitle(e.target.value)}
        placeholder="Enter title ... "
        className="border-2 border-blue-600 ps-3 h-13 w-full font-bold capitalize overflow-x-scroll"
      />
    </div>
  );

};

export default NoteTitle;
