import { useState } from 'react'
import './App.css'


function App() {

let counter = 0

const addValue = () => {
  counter += 1
  console.log(counter)
}

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button>Remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
