import { combineReducers } from 'redux';
import tableReducer from './tableReducer'
import userReducer from './userReducer'
import comparisonReducer from './comparisonReducer'
import ticketReducer from './ticketReducer'

export default combineReducers({
    table: tableReducer,
    user: userReducer,
    comparisons: comparisonReducer,
    tickets: ticketReducer,
})