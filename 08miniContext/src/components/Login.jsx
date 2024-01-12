import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    // handle click event
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
      type="text"
      placeholder='username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input 
      type="password" 
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login