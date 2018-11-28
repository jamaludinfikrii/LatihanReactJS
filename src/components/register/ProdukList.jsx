import React from 'react'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/css/agency.css'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/vendor/fontawesome-free/css/fontawesome.min.css'
import '../../support/startbootstrap-agency-gh-pages/startbootstrap-agency-gh-pages/vendor/fontawesome-free/css/all.css'
import axios from 'axios'

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
                <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={val.img} alt />
                </a>
                <div className="portfolio-caption">
                  <h4> {val.namaproduk}</h4>
                  <p className="text-muted"> Rp. {val.harga}</p>
                </div>
              </div>
            )
        })
        return listJSXProduk;
    }

    render(){
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
    }
}

export default ProdukList;