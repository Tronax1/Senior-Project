import { RANDOM_TICKET } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case RANDOM_TICKET:
            return action.payload
        default:
            return state;
    }
}