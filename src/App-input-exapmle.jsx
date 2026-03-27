import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [name, setName] = useState("")

function handelChange(event) {
  const value = event.target.value
  setName(value)
}

  return (
    <div>
      <h1>Input example</h1>

      <input onChange={handelChange} placeholder='Name...'></input>

      <p>Inputted value : {name}</p>
    </div>
  )
}

export default App
