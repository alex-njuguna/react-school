import './App.css'
import { reducer, store } from './components/index'


/**
 * logging store shows the various functionalities to operate the store
 * getState() - shows the current state of the store, i.e. the data in the store
 * dispatch() - initiates an action already defined in the reducer
 */
function App() {

  store.dispatch ({
    type: 'bugAdded', 
    payload: {
      description: 'bug 1'
    }
  })

  store.dispatch({
    type: 'bugRemoved',
    payload: {
      id: 1
    }
  })


  console.log(store.getState())

  return (
    <>
    </>
  )
}

export default App
