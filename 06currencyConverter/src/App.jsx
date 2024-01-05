import { useState } from 'react'
import './App.css'
import {InputBox} from './components/index'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('kes')
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <div className="container d-flex flex-column min-vh-100">
    <div className="w-100">
      <div className="w-100 border-secondary rounded p-3 shadow bg-light">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className="w-100 mb-1">
            <InputBox 
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
          </div>

          <div className="w-100">
            <button 
            className='btn btn-primary'
            onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-100 mb-1">
            <InputBox 
            label='to'
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
            />
          </div>
          <button 
          className='btn btn-danger' 
          type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
   </div>
  )
}

export default App
