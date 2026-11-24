import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Here is my nav bar */}
      <Navbar />
      <main>
        <About />
        <Interests />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App