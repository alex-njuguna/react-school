import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer, Home, About, Contact, Github, Login, GetStarted } from './components/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='about/' element={ <About /> }/>
          <Route path='contact/' element={ <Contact /> }/>
          <Route path='github/' element={ <Github /> }/>
          <Route path='login/' element={ <Login /> }/>
          <Route path='get-started/' element={ <GetStarted /> }/>
          <Route path='*' element={<div className='container p-3 fs-2 fw-bold text-danger'>Not Found</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
