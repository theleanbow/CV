import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import './assets/meyerReset.css'
import Home from './assets/Home.jsx'
import Resume from './assets/Resume/Resume.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
