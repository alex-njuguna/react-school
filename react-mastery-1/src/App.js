import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers"
import { Brand, CTA, Navbar } from "./components"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App