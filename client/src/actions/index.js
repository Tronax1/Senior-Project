import { GET_TABLES } from './types';
import { GET_USER } from './types'

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
export const getUser = (user) => dispatch =>{
    userName.push(user);
}
export const logOut = () => dispatch =>{
    userName.pop();
}

