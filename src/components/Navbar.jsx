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



class Navigation extends React.Component {
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
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/login">Register</Link></NavLink>
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
            <NavLink href="/login">Hallo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/login">{this.props.username}</Link></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )


    }}        
const mapStateToProps = (state) => {
  return { username : state.username }
}

export default connect(mapStateToProps)(Navigation);