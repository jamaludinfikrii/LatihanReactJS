import React , {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { select_produk } from '../actions'
import queryString from 'query-string'
import { Input , Form , Button} from 'reactstrap'

class produkDetail extends Component {
    componentDidMount(){
        var params = queryString.parse(this.props.location.search)
        var link = params.produkid
        console.log(this.props.location.search)
        console.log(params)
        console.log(link)
        axios.get(`http://localhost:2000/produk/${link}`)
        .then((res) => {
            console.log(res)
            this.props.select_produk(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    onCartBtn = () => {
        var idproduk = this.props.detailProduk.id
        var namaproduk = this.props.detailProduk.namaproduk
        var img = this.props.detailProduk.img
        var hargaproduk = this.props.detailProduk.harga
        var qty = this.refs.qty.refs.innerqty.value
        
        axios.get('http://localhost:2000/cart' , {
            params : {
                namaproduk
            }
        }).then((res) => {
            console.log(res)
            if(res.data.length === 0){
                console.log('delete')

                axios.post('http://localhost:2000/cart' , {
                username : this.props.username,
                id_produk : idproduk,
                namaproduk : namaproduk,
                img : img,
                harga_produk : hargaproduk,
                kuantitas : qty,
                total : hargaproduk*qty,
                id_order : 1
                }).then((res) => {
                console.log(res)
                alert('Produk berhasil dimasukan ke Keranjang')
                }).catch((err) => {
                console.log(err)
                })
                
            }else{
                console.log('Post')
                axios.put('http://localhost:2000/cart/' + res.data[0].id ,
                {
                    username : this.props.username,
                    id_produk : idproduk,
                    namaproduk : namaproduk,
                    img : img,
                    harga_produk : hargaproduk,
                    kuantitas : qty,
                    total : hargaproduk*qty,
                    id_order : 1
                } 
                ).then((res) => {
                alert('Produk berhasil dimasukan ke Keranjang')
                console.log(res)
                        })
            }
           
        })


 
        }
    render(){
        var { id, namaproduk , harga , kategori , img , deskripsi } = this.props.detailProduk
        return(
            <div className="container" style={{margin:'50px'}}>
                <div className="row">
                    <div className="col-4">
                        <img src={img} className="img-responsive" width='360px' />
                    </div>                
                    <div className='col-4' style={{margin:'20px', marginTop:'-10px'}}>
                        <div className='row'>
                            <h2>{namaproduk}</h2>
                        </div>
                        <div className='row'>
                            <h4> Rp. {harga}</h4>
                        </div>
                        <div className='row'>
                            <h4>Kategori : {kategori}</h4>
                        </div>
                        <div className='row'>
                            <p>{deskripsi}</p>
                            <Form inline>
                        <Input type="number" style={{ width: '60px' , marginRight:'20px'}} ref='qty' innerRef = 'innerqty' defaultValue = '1'/>
                        <Button className="btn-danger" onClick={this.onCartBtn}>Add</Button>
                        </Form>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return { detailProduk : state.selectedProduk , username : state.auth.username}
}


export default connect(mapStateToProps , { select_produk })(produkDetail);