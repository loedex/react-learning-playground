import React from "react";

const NoteTitle = ({ noteTitle, setNoteTitle }) => {
  return (
    <div className="w-full ">
      <input
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
