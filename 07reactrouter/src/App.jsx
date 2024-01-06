import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element=/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
