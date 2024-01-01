import { useCallback, useEffect, useState } from 'react'

function App() {

  /*states for variables
  length - set the length of or password
  numberAllowed - to set if the password should have numbers
  charAllowed - set if the password should have characters
  password - set password from the aforementioned states
  */
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!£$%^&*()~@:;><?/+=_-¬'

    for (let i=1; i <  length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char) 
    }

    setPassword(pass)
  }, [length, charAllowed, numberAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, charAllowed, numberAllowed])

  return (
    <div className="container d-flex flex-column min-vh-100 align-items-center text-center text-light p-4">
        <h4 className="fw-bold">Password Generator</h4>
        <div className="container m-3">
          <input 
          className='rounded border-0 w-75 p-2'
          type="text" 
          value={password}
          placeholder='Password'
          readOnly
          />
          &nbsp;&nbsp;
          <button className='btn  btn-primary rounded'>copy</button>
        </div>
        
        <div className="container m-3">
          <input 
          type="range"
          min={6}
          max={20}
          value={length} 
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id="" 
          />&nbsp;&nbsp;
          <label htmlFor="length">Length: {length}</label>
          &nbsp;&nbsp;&nbsp;&nbsp;

          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          onChange={() => {setNumberAllowed((prev) => !prev)}}
          />&nbsp;
          <label htmlFor="numbers">Numbers</label>
          &nbsp;&nbsp;&nbsp;&nbsp;

          <input
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={() => {setCharAllowed((prev) => !prev)}}
          />&nbsp;
          <label htmlFor="Character">Char</label>
        </div>

      
    </div>
  )
}

export default App
