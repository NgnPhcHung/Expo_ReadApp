import { combineReducers } from 'redux'
import {isLoadingReducer} from './OfflineBook'
import { loginReducer } from './About'
import { addNoteReducer } from './Note'
export default combineReducers({
  isLoadingReducer,
  loginReducer,
  addNoteReducer,
})