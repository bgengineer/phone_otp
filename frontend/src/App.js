import React from 'react'
import PhoneOTP from './pages/PhoneOTP'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'


function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<PhoneOTP />}/>
        <Route path = '/home' element = {<Homepage />} />
      </Routes>
    </div>
  )
}

export default App