import showAllCardReducer from './reducer'
import OpenCardReducer from './flipReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    showAllCardReducer,
    OpenCardReducer,
})