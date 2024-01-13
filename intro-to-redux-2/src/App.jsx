import './App.css'
import { reducer, store } from './components/index'

function App() {

  store.dispatch ({
    type: 'bugAdded', 
    payload: {
      description: 'bug 1'
    }
  })

  console.log(store.getState())

  return (
    <>
    </>
  )
}

export default App
