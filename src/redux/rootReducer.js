import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { cageReducer } from './reducers/cageReducer';

export default combineReducers({
  router,
  cage: cageReducer
})
