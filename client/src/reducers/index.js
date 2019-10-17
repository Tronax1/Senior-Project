import { combineReducers } from 'redux';
import tableReducer from './tableReducer'
import userReducer from './userReducer'
import comparisonReducer from './comparisonReducer'
import ticketReducer from './ticketReducer'
import countReducer from './countReducer'

export default combineReducers({
    table: tableReducer,
    user: userReducer,
    comparisons: comparisonReducer,
    tickets: ticketReducer,
    count: countReducer
})