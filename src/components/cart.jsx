import React from 'react';
import { Table,Input } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const rupiah = new Intl.NumberFormat('in-Rp', { style: 'currency', currency: 'IDR' })
class Cart extends React.Component {
    state = {listCart : [] , selected_edit : 0}
  componentDidMount(){
    this.getList()
  }

  getList = () => {
    axios.get('http://localhost:2000/cart' , {
      params : {
        username : this.props.username
      }
    })
    .then((res) => {
      console.log(res)
      this.setState({listCart : res.data})
    })
  }
  onEditClick = (id) => {
    this.setState({selected_edit : id})
  }

  onClickDelete = (id) => {
    if(window.confirm('Yakin Mau Hapus?')){
      axios.delete('http://localhost:2000/cart/' + id)
      .then((res) => {
        this.getList()
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  onSaveClick = () => {
    var kuantitas = this.refs.qty.refs.qtyInner.value
    axios.put('http://localhost:2000/cart/' + this.state.selected_edit , {
      username : this.props.username,
      id_produk : this.state.listCart[0].id_produk,
      img : this.state.listCart[0].img,
      harga_produk : this.state.listCart[0].harga_produk,
      kuantitas : kuantitas,
      total : this.state.listCart[0].total * kuantitas,
      id_order : this.state.listCart[0].id_order
      

    }).then((res) => {
      console.log(res)
      this.getList()
      this.setState({selected_edit : 0})
    })
  }
   
  onCalcel =() => {
    this.setState({selected_edit : 0})
  }
  renderListCart = () => {
    
    var listJsx = this.state.listCart.map((val) => {
        if(this.state.selected_edit == val.id){
        return(
          <tr>
            <td>{val.id}</td>
            <th><img src={val.img} width="50px" alt={val.id}/></th>
            <td>{val.namaproduk}</td>
            <td>{rupiah.format(val.harga_produk)}</td>
            <td style={{width:'20px'}}><Input type='number' defaultValue={val.kuantitas} style={{width:'50px'}} ref='qty' innerRef='qtyInner'/></td>
            <td style={{width:'20px'}}>{rupiah.format(val.total)}</td>
            <td style={{width:'5px'}}><i class="fas fa-ban"  onClick={this.onCalcel}></i></td>
            <td style={{width:'5px'}}><i class="far fa-check-circle" onClick={this.onSaveClick}></i></td>
          </tr>
          )
        }
        return(
        
          <tr>
            <td>{val.id}</td>
            <th><img src={val.img} width="50px" alt={val.id}/></th>
            <td>{val.namaproduk}</td>
            <td>{rupiah.format(val.harga_produk)}</td>
            <td style={{width:'20px'}}>{val.kuantitas}</td>
            <td style={{width:'20px'}}>{rupiah.format(val.total)}</td>
            <td style={{width:'5px'}}><i class="fas fa-trash-alt" onClick={() => this.onClickDelete(val.id)}></i></td>
            <td style={{width:'5px'}}><i class="fas fa-pen" onClick ={() => this.onEditClick(val.id)}></i></td>
          </tr>
          
        
      )
     
    })

    return listJsx;
  }
  onCheckOut = () => {
    var date = new Date() 
    var a = 'Tanggal = ' + date.getDay()  +'-' +  date.getDate() + '-' + date.getFullYear() + ' Jam = ' + date.getHours()+ ':' +date.getMinutes() + ':' + date.getSeconds()  
    if(window.confirm('Yakin Ingin CheckOut?')){
      axios.post('http://localhost:2000/history', {
        username : this.props.username,
        time : a,
        total_harga : this.renderTotalHarga(),
        item : this.state.listCart.length,

        detail : this.state.listCart,
      })
      .then((res) => {
        console.log(res)
        for(let i = 0 ; i < this.state.listCart.length ; i ++){
          axios.delete('http://localhost:2000/cart/' + this.state.listCart[i].id    
          ).then((res) => {
            console.log(res)     
            this.getList()      
          })
        }
      
      })
    }else{
      alert('Anda Plin Plan')
    }

  
    
  }

  renderTotalHarga = () => {
    var a = 0
    for(let i = 0; i < this.state.listCart.length ; i++){
      a += this.state.listCart[i].total
    }
    return a
      
    
  }

  render() {
    if(this.state.listCart.length > 0){
      return (
        <div className='container'>
        <center>
            <h1 style={{marginTop:'20px'}}>
                CART
            </h1>
        </center>
      <Table style={{marginTop:'40px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Nama Produk</th>
            <th>Harga Barang</th>
            <th>Kuantitas</th>
            <th>Total</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.renderListCart()}
          
        </tbody>
        
      </Table>
      <center>
      <div className='col-2'>
      <h3>{rupiah.format(this.renderTotalHarga())}</h3>
       <Input className="btn-primary" type='button' value='CHECKOUT' onClick ={this.onCheckOut}/>
      </div>
          
      </center>
      </div>
    );
    }else{
      return(
        <center>
          <div className='col-4'>
          <h1>Keranjang Kosong</h1>
          <Link to='/produk'><Input type="button" className='btn-primary' value="Lanjutkan Belanja"/></Link> 
          <p></p>         
          <Link to='/history'><Input type="button" className='btn-success' value="Lihat History Transaksi"/></Link>          
          </div>
        </center>
      )
    }
    
  }
}
const mapStateToProps = (state) => {
  return{
    username : state.auth.username
  }
}

export default connect(mapStateToProps) (Cart)