import React, { useState } from 'react'
import Tasks from './components/Tasks'
import Filter from './components/Filter'

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
          Task Tracker with Filter
        </h1>
        <Filter onSearch={setSearchText} />
        <Tasks currentText={searchText} />
      </div>
    </div>
  )
}

export default App
