import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';
 import { connect } from 'react-redux'
 
import { Link } from 'react-router-dom';
import { onLogOut , keepLogin } from '../actions'
import Cookies from 'universal-cookie'


const cookies = new Cookies();
class Navigation extends React.Component {
  onClickLogOut = () => {
    this.props.onLogOut()
    cookies.remove('Ferguso')
  }
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
      if(this.props.username === ''){
        return(
          <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">GO-BER</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/produk">List Product</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
      )
      }
      return(
        <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">GO-BER</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
              <NavLink href="/produk">List Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/manage">Manage Produk</NavLink>
            </NavItem>
          <NavItem>
            <NavLink href="/login">Hallo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/login">{this.props.username}</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/login" onClick={this.onClickLogOut}>LogOut</Link></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )


    }}        
const mapStateToProps = (state) => {
  return { username : state.auth.username }
}

export default connect(mapStateToProps , {onLogOut ,keepLogin})(Navigation);