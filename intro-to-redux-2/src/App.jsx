import './App.css'
import { reducer, store } from './components/index'


/**
 * logging store shows the various functionalities to operate the store
 * getState() - shows the current state of the store, i.e. the data in the store
 * dispatch() - initiates an action already defined in the reducer
 * subscribe() - displays changes happening in the store, to prevent memory leaks when the user changes the page where the subscribe method is not needed, it is assigned to a variable(unsubscribe) and called.  
 */
function App() {

  const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
  })

  store.dispatch ({
    type: 'bugAdded', 
    payload: {
      description: 'bug 1'
    }
  })

  unsubscribe()

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
