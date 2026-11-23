import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Here is my nav bar */}
      <Navbar />
      <main>
        <About />
      </main>
    </div>
  )
}

export default App