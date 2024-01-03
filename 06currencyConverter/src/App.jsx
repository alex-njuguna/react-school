import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('kes')
  const [convertedAmount, setConvertedAmount] = useState(0)


  return (
   <div className="container d-flex flex-column min-vh-100">
      <InputBox />
   </div>
  )
}

export default App
