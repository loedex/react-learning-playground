import React from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import DisplayNotes from './components/DisplayNotes'
import { useState , useEffect , useRef } from 'react'

const App = () => {
  const [noteData , setNoteData] = useState([]);

  const getDataUpdate = (t, d)=>{
    const newNoteObject = {
      id:Date.now(),
      title: t,
      description: d
    };

    setNoteData((prev)=> [...prev, newNoteObject]);
  }

  const handleRemoveNote = (id)=>{
    
  }
  
  return (
    <div>
      <Header />
      <NoteForm  getDataUpdate={getDataUpdate}/>
      
      {
        noteData.map((note)=>(
          <DisplayNotes key={note.id} title={note.title} description={note.description} />
        ))
      }
    </div>
  )
}

export default App
