import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('kes')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom[to]
    setTo[from]
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <div className="container d-flex flex-column min-vh-100">
      <InputBox />
   </div>
  )
}

export default App
