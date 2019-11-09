import {GET_RESULTS} from '../actions/types'

export default (state = null, action) =>{
    switch(action.type){
        case GET_RESULTS:
            console.log("Estse es el reducer ")
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}