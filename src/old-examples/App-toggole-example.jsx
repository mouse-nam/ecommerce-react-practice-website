import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function GreetingsV0() {
  return <h1>Hello, I am Naznin, I am 29 years old.</h1>
}

function GreetingsWithPropsV1(props) {
  return <h1>Hello, I am {props.name}, I am {props.age} years old.</h1>
}

function Greetings({name, age}) {
  return <h1>Hello, I am {name}, I am {age} years old.</h1>
}

function App() {
  const name = "Naznin"
  const age = 29

  const [showGreetings, setShowGreetings] = useState(false)
  function toggleGreetings() {
    setShowGreetings(!showGreetings)
  }

  return (
    <div>
      <button onClick={toggleGreetings}>Click me!</button>
      {showGreetings && <Greetings name="Mitu" age="30" /> }
    </div>
  )
}

export default App
