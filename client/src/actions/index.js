import { GET_TABLES } from './types';
import { GET_USER } from './types'

export const getTables = (tables) => dispatch =>{
    dispatch({
        type: GET_TABLES,
        payload: tables
    })
}
export const getUser = (user) => dispatch =>{
    dispatch({
        type: GET_USER,
        payload: user
    })
}
export const logOut = () => dispatch =>{
    dispatch({
        type: GET_USER,
        payload: false
    })
}

