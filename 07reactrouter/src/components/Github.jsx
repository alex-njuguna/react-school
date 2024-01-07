import React, { useEffect } from 'react'
import { useState } from 'react'

const Github = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/alex-njuguna')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setData(data)
    })
  }, [])

  return (
    <div>Github</div>
  )
}

export default Github