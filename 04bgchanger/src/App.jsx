import { useState } from 'react'

function App() {

  const [color, setColor] = useState('olive')

  // const changeColor = (color) => {
  //   setColor(color)
  // }

  return (
    <div className="container-fluid d-flex flex-column min-vh-100" style={{backgroundColor: color}}>
      <div className="container-md text-center fixed-bottom">
        <div className="btn-group p-3">
          <button onClick={() => setColor('#007BFF')} className='btn btn-lg btn-primary rounded m-3'>Primary</button>
          <button onClick={() => setColor('#28A745')} className='btn btn-lg btn-success rounded m-3'>Success</button>
          <button onClick={() => setColor('#DC3545')} className='btn btn-lg btn-danger rounded m-3'>Danger</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
