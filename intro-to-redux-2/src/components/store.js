import reducer from './reducer'
import { createStore } from 'redux'

/**
 * pass in the reducer as an argument to the higher function createStore
 * A function is regarded as a higher function if it takes another function as an argument
 */
const store = createStore(reducer)

export default store