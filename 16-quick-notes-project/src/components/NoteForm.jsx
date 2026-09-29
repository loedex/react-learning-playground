import React from "react";
import NoteTitle from "./NoteTitle";
import NoteDescription from "./NoteDescription";
import NoteFormFooter from "./NoteFormFooter";
import { useState } from "react";

const NoteForm = ({getDataUpdate}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  console.log("Current Title : ",noteTitle);
  console.log("Current Description : ",noteDescription);

  function handleSubmit(e) {
    e.preventDefault();

    if(!noteTitle.trim() || !noteDescription.trim()) return;
    getDataUpdate(noteTitle, noteDescription);
    setNoteTitle("");
    setNoteDescription("");
  };
  
  

  return (
    <div className="px-5 mt-5">
      <form onSubmit={handleSubmit} action="" className="flex flex-col w-full gap-2 ">
        <NoteTitle noteTitle={noteTitle} setNoteTitle={setNoteTitle} />
        <NoteDescription
          noteDescription={noteDescription}
          setNoteDescription={setNoteDescription}
        />

        <NoteFormFooter noteDescription={noteDescription} noteTitle={noteTitle}/>
      </form>
    </div>
  );
};

export default NoteForm;
