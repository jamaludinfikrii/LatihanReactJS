import { SELECT_HISTORY } from '../actions/types'
const INITIAL_STATE = { id : 0 , produkid : 0 , img : '' , namaproduk : '' , kuantiti : '' }

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case SELECT_HISTORY :
            return action.payload;
        default :
            return state;
    }
}