import { legacy_createStore as createStore } from 'redux'
import Reducer from './reducer.js'
let state = {
  token: sessionStorage.getItem("token")
}
let store = createStore(Reducer, state)
export default store;