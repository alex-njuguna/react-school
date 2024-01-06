import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element=/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
