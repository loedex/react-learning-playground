import React, { useState } from 'react'
import Tasks from './components/Tasks'
import Filter from './components/Filter'

const App = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Filter onSearch={setSearchText} />
      <Tasks currentText={searchText} />
    </div>
  )
}

export default App
