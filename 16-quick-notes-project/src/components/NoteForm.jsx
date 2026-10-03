import React from "react";
import NoteTitle from "./NoteTitle";
import NoteDescription from "./NoteDescription";
import NoteFormFooter from "./NoteFormFooter";
import { useState } from "react";

const NoteForm = ({getDataUpdate}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [limitError, setLimitError] = useState(null);
  const [focusTrigger, setFocusTrigger] = useState(0);
  

  console.log("Current Title : ",noteTitle);
  console.log("Current Description : ",noteDescription);

  function handleSubmit(e) {
    e.preventDefault();

    if(!noteTitle.trim() || !noteDescription.trim()) {
      setLimitError('Either title or description is missing. Kindly fill both the fields to add note in the list');
      return;
    }

    getDataUpdate(noteTitle, noteDescription);
    setNoteTitle("");
    setNoteDescription("");
    setLimitError(null);
    setFocusTrigger(prev => prev+1);
  };
  
  

  return (
    <div className="px-5 mt-5">
      <form onSubmit={handleSubmit} action="" className="flex flex-col w-full gap-2 ">
        <NoteTitle focusTrigger={focusTrigger} noteTitle={noteTitle} setNoteTitle={setNoteTitle} />
        <NoteDescription
          noteDescription={noteDescription}
          setNoteDescription={setNoteDescription}
          limitError={limitError}
          setLimitError={setLimitError}
        />

        <NoteFormFooter noteDescription={noteDescription} noteTitle={noteTitle}/>
      </form>
    </div>
  );
};

export default NoteForm;
