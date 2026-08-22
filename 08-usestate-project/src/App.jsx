import React from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'

import Habit from './components/habit/Habit'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      
      <Habit />
    </div>
  )
}

export default App