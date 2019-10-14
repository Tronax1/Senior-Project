import { GET_TABLES, GET_USER, GET_RESULTS } from './types';
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

export const fetchResults = () => async dispatch =>{
    const comparisons = await axios.get('/api/items/scores');
    dispatch({
        type: GET_RESULTS,
        payload: comparisons
    })
}
export const getUser = (user) => dispatch =>{
    userName.push(user);
}
export const logOut = () => dispatch =>{
    userName.pop();
}

