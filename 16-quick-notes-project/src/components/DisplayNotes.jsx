import React from "react";
import "remixicon/fonts/remixicon.css";


const DisplayNotes = ({ id, title, description, handleRemoveNote, noteData}) => {
  return (
    <div>
      
      <div className="flex justify-between mx-7 my-5 bg-amber-200 rounded-lg items-center px-5 py-3">
        <div className="leading-5">
          <h5 className="font-bold capitalize underline">{title}</h5>
          <p className="text-1xl break-all px-3 ">{description}</p>
        </div>
        <div className="shrink-0 self-start ">
          <button onClick={()=> handleRemoveNote(id)} className="bg-amber-500 px-3 py-2 rounded-full cursor-pointer">
            <i className="ri-delete-bin-6-line text-lg font-bold text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayNotes;
