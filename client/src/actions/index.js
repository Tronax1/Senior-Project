import { GET_TABLES, GET_USER, GET_RESULTS, GET_TICKETS, RANDOM_TICKET } from './types';
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
export const addResult = (item) => async dispatch =>{
    await axios.post('/api/items', item);
}
export const getUser = (user) => dispatch =>{
    userName.push(user);
}

export const randomTicket = (min, max) => dispatch =>{
    const num1 = Math.floor(Math.random() * (max - min) + min);
    const num2 = Math.floor(Math.random() * (max - min) + min);
    const selectedTickets = {
        num1,
        num2
    }
    dispatch({
        type: RANDOM_TICKET,
        payload: selectedTickets
    })
}
export const logOut = () => dispatch =>{
    userName.pop();
}

