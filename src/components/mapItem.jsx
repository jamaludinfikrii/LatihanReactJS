import React from 'react'
import { connect } from 'react-redux'
import { select_produk, tambahCart } from '../actions'
import {Input , Form} from 'reactstrap'
import axios from 'axios'


const rupiah = new Intl.NumberFormat('in-Rp', { style: 'currency', currency: 'IDR' })
class mapping extends React.Component {


    onProdukClick = () => {
      this.props.select_produk(this.props.list)
    } 
    render(){
            return(   
              <div  className={`col-md-4 col-sm-6 portfolio-item filter`}>
                      <a className="portfolio-link" data-toggle="modal" onClick={this.onProdukClick} >
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x" />
                          </div>
                        </div>
                        <img className="img-fluid" src={this.props.list.img} alt />
                      </a>
                      <div className="portfolio-caption">
                        <h4 > {this.props.list.namaproduk}</h4>
                        <p className="text-muted">{rupiah.format(this.props.list.harga)}</p>
                        <center>
                        <div className="col-8"> 
                        </div>
                        </center>
                      </div>     
              </div>  
              )                            
    }
}

const mapStateToProps = (state) => {
  return{
    username : state.auth.username
   }
}

export default connect(mapStateToProps , {select_produk , tambahCart})(mapping) //Function yang return Function