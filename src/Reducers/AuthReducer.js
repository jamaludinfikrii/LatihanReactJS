import { LOGIN_SYSTEM_ERROR, USER_LOGIN_SUCCESS , USER_NOT_FOUND ,LOGIN_LOADING , LOGOUT, REGISTER_LOADING, EDIT_DATA ,COOKIE_CHECKED} from '../actions/types'
const INITIAL_STATE = {username : '' , error : '' , loading : false , cookie : false , edit : false}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS :
            return {...INITIAL_STATE , username : action.payload , cookie : true};
        case USER_NOT_FOUND:
            return {...INITIAL_STATE , error : 'username or password Invalid', cookie : true}
        case LOGIN_SYSTEM_ERROR:
            return {...INITIAL_STATE , error : action.payload , cookie : true}
        case LOGIN_LOADING : 
            return {...INITIAL_STATE , loading : true ,cookie : true}
        case LOGOUT:
            return {...INITIAL_STATE , cookie : true}
        case REGISTER_LOADING :
            return {...INITIAL_STATE , loading :true , cookie : true}
        case COOKIE_CHECKED :
            return {...INITIAL_STATE , cookie : true}
        case EDIT_DATA:
            return{...state , edit : true}
        default :
            return state
    }
}