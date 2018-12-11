import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { select_produk } from '../actions'
import queryString from 'query-string'
import { Input , Table} from 'reactstrap'

class HistoryDetail extends React.Component{
    state = {listProduk : [] , id : 0}
    componentDidMount(){
        var params = queryString.parse(this.props.location.search)
        var link = params.id
        console.log(link)
        console.log(params)
        axios.get(`http://localhost:2000/history/${link}`)
        .then((res) => {
            console.log(res)
            this.setState({listProduk : res.data.detail , id : res.data.id})
            
        })
    }

    renderListJsx = () => {
        var listJsx = this.state.listProduk.map((val) => {
            return(
                <tr>
                    <td>{this.state.id}</td>
                    <td>{val.id_produk}</td>
                    <td>{val.namaproduk}</td>
                    <td><img src={val.img} width='50px'/></td>
                    <td>{val.harga_produk}</td>
                    <td>{val.kuantitas}</td>
                </tr>
            )
        })

        return listJsx;
    }

    render(){
        return(
            <div className='container'>
            <center>
                <h1 style={{marginTop:'20px'}}>
                    HISTORY DETAIL
                </h1>
            </center>
          <Table style={{marginTop:'40px'}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produk ID</th>
                <th>Nama</th>
                <th>Image</th>
                <th>Harga</th>
                <th>Kuantiti</th>
              </tr>
            </thead>
            <tbody>
              {this.renderListJsx()}
            </tbody>
            
          </Table>
        
          </div>
        )
    }
}
export default HistoryDetail