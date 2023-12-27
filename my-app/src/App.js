import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
   
  )
}

const App = () => {

  const [friends, setFriends] = useState(['James', 'Peter'])

  const addOne = () => {
    setFriends([...friends, 'Paul'])
  }

  const removeOne = () => {
    setFriends(friends.filter((friend) => friend !== 'Peter'))
  }

  const updateOne = () => {
    setFriends(friends.map((friend) => (
      (friend === 'James') ? friend = 'James Monroe' : friend
    )))
  }

  return (
  <>
    {
      friends.map((friend) => (
        <li key={Math.random() * 10}>{friend}</li>
      ))
    }

      <button onClick={addOne}>Add one</button>
      <button onClick={removeOne}>Remove one</button>
      <button onClick={updateOne}>Update one</button>

  </>
  )
}

export default App
