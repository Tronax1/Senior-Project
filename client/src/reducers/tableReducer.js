import {GET_TABLES} from '../actions/types'

export default (state = null, action) =>{
    switch(action.type){
        case GET_TABLES:
            return action.payload
        default:
            return false;
    }
}