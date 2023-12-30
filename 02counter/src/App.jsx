import { useState } from 'react'
import './App.css'


function App() {

// useState hook to initiate the value of counter(0) and set the value of counter depending on changes
const [counter, setCounter] = useState(0)

const addValue = () => {
  setCounter(counter + 1)
}

const removeValue = () => {
  setCounter(counter - 1)
}

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
