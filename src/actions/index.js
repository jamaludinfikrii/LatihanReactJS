import axios from 'axios'
import { LOGIN_SYSTEM_ERROR, USER_NOT_FOUND, USER_LOGIN_SUCCESS , LOGIN_LOADING , LOGOUT} from './types'

export const onUserLogin = ({user, password}) => { //distructuring
                                                        
    //melakukakn proses asyncronus di action creator dilarang, makanya harus install redux-thunk sebagai middleware    
    // kemudian import di index.js ,
    // redux stunk kegunaanya selain asyncronus juga agar action creator bisa kirim action lebih dari sekali    
    // yang di return sebuah function
    return (dispatch) => {
        // axios get me return promise
        dispatch({ type : LOGIN_LOADING })

        axios.get('http://localhost:2000/users',{
            params: {
                username : user, // ini adalah singkatan dari username : username, yang kiri harus sesuai dengan json dan yang kanan terserah. respon daari API selalu object ada status ada data
                password : password // kalo get berdasarkan id return object, lihat kembali di slide
            }
        }).then((res) => {
            console.log(res)
            if(res.data.length > 0){
                dispatch({type : USER_LOGIN_SUCCESS , payload :user})
            }else{
                dispatch({ type : USER_NOT_FOUND })
            }

        }).catch((err) => {
            dispatch({type : LOGIN_SYSTEM_ERROR})
            console.log(err)
        })
    }
}

export const onLogOut = () => {
    return { type : LOGOUT }
}

export const keepLogin = (username) => {
    return { type : USER_LOGIN_SUCCESS , payload : username }
}