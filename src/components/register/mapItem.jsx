import React from 'react'


class mapping extends React.Component {
    
    render(){
          
        return(
        <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={this.props.list.img} alt />
                </a>
                <div className="portfolio-caption">
                  <h4> {this.props.list.namaproduk}</h4>
                  <p className="text-muted"> Rp. {this.props.list.harga}</p>
                </div>
        </div>
        )
    }
}

export default mapping