import { combineReducers } from 'redux';
import tableReducer from './tableReducer'
import userReducer from './userReducer'

export default combineReducers({
    table: tableReducer,
    user: userReducer
})