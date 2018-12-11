import React from 'react'
import { Input , Table } from 'reactstrap'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const rupiah = new Intl.NumberFormat('in-Rp', { style: 'currency', currency: 'IDR' })
class History extends React.Component{
    state = {listHistory : [] , select_history : 0}
    componentDidMount(){
        this.getList()
    }
    onClickDetail = (id) => {
        this.setState({select_history : id})
    }

    getList = () => {
        axios.get('http://localhost:2000/history' , {
            params : {
                username : this.props.username
            }
        }).then((res) => {
            console.log(res.data.length)
            this.setState({listHistory : res.data})
        })
    }
    rederListJsx = () => {
        var listJsx = this.state.listHistory.map((val) => {
            return(
                <tr>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.time}</td>
                    <td>{val.item}</td>
                    <td>{val.total_harga}</td>
                    <td><Input type="button" value='Detail' className='btn-success' onClick={() => this.onClickDetail(val.id) }/></td>
                </tr>
            )
        })
        return listJsx
    }
    render(){
        if(this.state.select_history > 0){
            return <Redirect to={`/historydetail?id=${this.state.select_history}`} />
        }
        return(
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
            <th>Username</th>
            <th>Tanggal Transaksi</th>
            <th>Total Item</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.rederListJsx()}
        </tbody>
        
      </Table>
      <center>
      <div className='col-2'>
       <Input className="btn-primary" type='button' value='CHECKOUT' onClick ={this.onCheckOut}/>
      </div>
          
      </center>
      </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        username : state.auth.username
    }
}

export default connect(mapStateToProps)(History);