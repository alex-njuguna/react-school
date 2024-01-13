import './App.css'
import { reducer, store } from './components/index'
import { addBug, removeBug } from './components/actions'

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

  store.dispatch(addBug('bug 1'))
  store.dispatch(addBug('bug 2'))
  store.dispatch(addBug('bug 3'))
  store.dispatch(addBug('bug 4'))

  unsubscribe()

  store.dispatch(removeBug(1))

  console.log(store.getState())

  return (
    <>
    </>
  )
}

export default App
