import {GET_TABLES} from './types';

export const getTables = (tables) => dispatch =>{
    let selectedTables = tables;
    console.log(selectedTables);
    dispatch({
        type: GET_TABLES,
        payload: selectedTables
    })
}