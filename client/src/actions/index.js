import {GET_TABLES} from './types';

export const getTables = (tables) => dispatch =>{
    let selectedTables = tables;
    dispatch({
        type: GET_TABLES,
        payload: selectedTables
    })
}