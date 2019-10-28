import { GET_TABLES, 
    GET_USER, 
    GET_RESULTS, 
    GET_TICKETS, 
    GET_TOTAL_COMPARISONS,
    GET_COMPARISON_COUNT,
    GET_SELECTED_TABLES
} from './types';
import axios from 'axios';


const userName = [];
export const fetchUser = () => dispatch =>{
    if(Array.isArray(userName) && userName.length === 0){
        console.log("I am here");
        dispatch({
            type: GET_USER,
            payload: false
        })
    }
    else{
        console.log("Logged in");
        dispatch({
            type: GET_USER,
            payload: userName[0]
        })
    }
}
export const setCounter = (count) => dispatch =>{
    dispatch({
        type: GET_COMPARISON_COUNT,
        payload: count
    })
}
export const decreaseCount = (count) => dispatch =>{
    const newCount = count - 1;
    dispatch({
        type: GET_COMPARISON_COUNT,
        payload: newCount
    })
}
export const getTables = (tables) => dispatch =>{
    dispatch({
        type: GET_TABLES,
        payload: tables
    })
}

export const fetchResults = (user) => async dispatch =>{
    const comparisons = await axios.get('/api/items/scores', {
        params: {
            user: user.user
        }
    });
    dispatch({
        type: GET_RESULTS,
        payload: comparisons
    })
}
export const fetchTickets = () => async dispatch =>{
    const tickets = await axios.get('/api/items');
    dispatch({
        type: GET_TICKETS,
        payload: tickets
    })
}

export const fetchAllResults = (user) => async dispatch =>{
    const count = await axios.get('/api/items/total', {
        params: {
            user: user
        }
    });
    dispatch({
        type: GET_TOTAL_COMPARISONS,
        payload: count
    })
}
export const addResult = (item) => async dispatch =>{
    await axios.post('/api/items', item);
}
export const addSelectedTables = (tableNames) => dispatch =>{
    dispatch({
        type: GET_SELECTED_TABLES,
        payload: tableNames
    });
}
export const getUser = (user) => dispatch =>{
    userName.push(user);
}
export const logOut = () => dispatch =>{
    userName.pop();
}

