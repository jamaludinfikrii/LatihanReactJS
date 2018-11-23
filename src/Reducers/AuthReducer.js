const INITIAL_STATE = ''

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'USER_LOGIN_SUCCESS' :
            return action.payload;
        default :
            return state
    }
}