import React from 'react'
import { connect } from 'react-redux'
import { select_produk } from '../../actions'

const rupiah = new Intl.NumberFormat('in-Rp', { style: 'currency', currency: 'IDR' })
class mapping extends React.Component {
    onProdukClick = () => {
      this.props.select_produk(this.props.list)
    }  

    render(){
            return(   
              <div onClick={this.onProdukClick} className={`col-md-${this.props.size} col-sm-6 portfolio-item filter`}>
                      <a className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x" />
                          </div>
                        </div>
                        <img className="img-fluid" src={this.props.list.img} alt />
                      </a>
                      <div className="portfolio-caption">
                        <h4> {this.props.list.namaproduk}</h4>
                        <p className="text-muted">{rupiah.format(this.props.list.harga)}</p>
                      </div>
                      
              </div>  
              )                    
    }
}

export default connect(null , {select_produk})(mapping) //Function yang return Function