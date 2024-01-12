import React from 'react'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Divide from './pages/Divide'
import Multiply from './pages/Multiply'
import Subtract from './pages/Subtract'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/add" element={<Add />} />
      <Route path="/divide" element={<Divide />} />
      <Route path="/multiply" element={<Multiply />} />
      <Route path="/subtract" element={<Subtract />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App