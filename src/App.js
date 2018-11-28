import React, { Component } from 'react';
import Header from './components/header'
import Konten from './components/Kontent'
import Navigation from './components/Navbar'
import HomePage from './components/homepage'
import Produk from './components/register/ProdukList'
// import Login from './components/Form'

import Footer from './components/footer';
// import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/register'
import Register from './components/register';


class App extends Component {
  state = { password : '' }


  // state = {user = ''}
  // onClickBtn = () =>{
  // this.setState({user : this.refs.tbUsername.refs.username.value  
  // }

  render() {
  //  var tempState = this.state.password

    
    


    return (
      <div>
        <Navigation />
     
        <div className = "container col-4"> 
        {/* <Login /> */}
        {/* <h1>Ini Main</h1> */}
          {/* { <Header  text = {{propertiObj : 'valueObj'}}/> } */}
          {/* <Header  text = "Jamaludin" number ={500}/> */}
          {/* { <Header  text = "Anjaaay" number = {20*90}/> }/ */}
          {/* <Konten ubahClik = {content}>
            <p> Ini isi konten yang fleksibel </p>
            <p>Tulis segala sesuatu disini karena disini fleksibel</p>
          </Konten> 
          <Button color="danger" onClick = {this.onClickBtn}>Ubah</Button> */}
          
          {/* <Footer /> */}
        </div>
        <div>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={Register}/>
          <Route path="/produk" component={Produk}/>
        </div>
       
      </div>
    );
  }
}

export default App;
