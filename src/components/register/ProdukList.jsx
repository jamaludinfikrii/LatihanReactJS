import React from 'react'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/css/agency.css'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/vendor/fontawesome-free/css/fontawesome.min.css'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/vendor/fontawesome-free/css/all.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ListMap from './mapItem'
import Cookies from 'universal-cookie'


const cookies = new Cookies
class ProdukList extends React.Component{
    state = {listProduk : []}

    componentDidMount(){
        axios.get('http://localhost:2000/produk')
            .then((data) => {
                console.log(data.data)
                this.setState({ listProduk : data.data })
            }).catch((err) => {
                console.log(err)
            })
    }
    renderListProduk = () => {
        var listJSXProduk = this.state.listProduk.map((val) => {
            return(
                <ListMap list={val}/>
            )
        })
        return listJSXProduk;
    }

    render(){
      const username = cookies.get('Ferguso')
      if(username !== undefined){
        return(
          <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Produk of The Year</h2>
                <h3 className="section-subheading text-muted">Produk paling laku di tahun ini</h3>
              </div>
            </div>
            <div className="row">
              {this.renderListProduk()}
            </div>
          </div>
          </section>
        )
    }else{ 
      return <Redirect to='/login' />
   
  }
    }
}
const mapStateToProps = (state) => {
  return{
    username : state.auth.username
  }
}



export default connect(mapStateToProps)(ProdukList);