import axios from 'axios'

export const onUserLogin = ({user , pass}) => { //distructuring
                                                        
    //melakukakn proses asyncronus di action creator dilarang, makanya harus install redux-thunk sebagai middleware    
    // kemudian import di index.js ,
    // redux stunk kegunaanya selain asyncronus juga agar action creator bisa kirim action lebih dari sekali    
    // yang di return sebuah function
    return (dispatch) => {
        // axios get me return promise
        axios.get('http://localhost:2000/users',{
            params: {
                username : user, // ini adalah singkatan dari username : username, yang kiri harus sesuai dengan json dan yang kanan terserah. respon daari API selalu object ada status ada data
                password : pass // kalo get berdasarkan id return object, lihat kembali di slide
            }
        }).then((res) => {
            console.log(res)
            if(res.data.length > 0){
                dispatch({type : 'USER_LOGIN_SUCCESS' , payload :user})
            }

        }).catch((err) => {
            console.log(err)
        })
    }
}