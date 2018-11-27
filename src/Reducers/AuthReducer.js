import { LOGIN_SYSTEM_ERROR, USER_LOGIN_SUCCESS , USER_NOT_FOUND ,LOGIN_LOADING , LOGOUT} from '../actions/types'
const INITIAL_STATE = {username : '' , error : '' , loading : false}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS :
            return {...INITIAL_STATE , username : action.payload};
        case USER_NOT_FOUND:
            return {...INITIAL_STATE , error : 'username or password Invalid'}
        case LOGIN_SYSTEM_ERROR:
            return {...INITIAL_STATE , error : 'System Error'}
        case LOGIN_LOADING : 
            return {...INITIAL_STATE , loading : true}
        case LOGOUT:
            return INITIAL_STATE
        default :
            return state
    }
}