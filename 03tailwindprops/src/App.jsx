import { useState } from 'react'

// import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded">Vite with tailwind</h1>

      <Card
       image='https://avatars.githubusercontent.com/u/123743552?v=4'
       quote="``Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.``"
       username='Alex Kinuthia' 
       designation="Associate Software Engineer, ALX" 
       />
      <Card username='Peter Kandie' />
      <Card username='James Aggrey' designation='marketing consultant' />

    </>
  )
}

export default App
