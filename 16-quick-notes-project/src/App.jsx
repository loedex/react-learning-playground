import React from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import DisplayNotes from './components/DisplayNotes'
import { useState , useEffect , useRef } from 'react'

const App = () => {
  const [noteData , setNoteData] = useState([]);
  const totalNotesCreatedRef = useRef(0);

  const getDataUpdate = (t, d)=>{
    const newNoteObject = {
      id:Date.now(),
      title: t,
      description: d
    };

    setNoteData((prev)=> [...prev, newNoteObject]);
    totalNotesCreatedRef.current +=1;
  }

  const handleRemoveNote = (id)=>{
    setNoteData((prev)=> prev.filter((note)=> note.id !== id));
  }
  
  return (
    <div>
      <Header noteData={noteData} totalNotes={totalNotesCreatedRef.current}/>
      <NoteForm  getDataUpdate={getDataUpdate}/>
      
      {
        noteData.map((note)=>(
          <DisplayNotes key={note.id} title={note.title} description={note.description} id={note.id} handleRemoveNote={handleRemoveNote}  />
        ))
      }
    </div>
  )
}

export default App
