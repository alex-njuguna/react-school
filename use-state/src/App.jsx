import { useState } from 'react'
import './App.css'

function App() {

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  })

  const color = 'purple'

  function updateCar() {
    setCar((car) => {
      return {...car, year: '1955' }
    })
  }

  return (
    <>
        <h1 style={{ color: 'purple'}}>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        <button onClick={updateCar}>1955</button>
    </>
  )
 }
 
export default App
