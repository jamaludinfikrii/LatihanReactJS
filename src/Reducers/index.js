import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ProdukDetail from './produkDetailReducer';


export default combineReducers({
    user : () => 'JamaludinFikri',
    auth :  AuthReducer,
    selectedProduk : ProdukDetail
})