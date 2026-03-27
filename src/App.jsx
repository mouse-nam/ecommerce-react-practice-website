import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name = "Naznin"
  const age = 29

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>A {age} years old SWE aspirant.</p>
    </div>
  )
}

export default App
