import React from 'react'
import './register/css/main.css'
import './register/css/util.css'
import axios from 'axios'

class Register extends React.Component {
    render(){
        return (
            <div className="limiter">
              <div className="container-login100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1540871112484-09beaca00ec2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a2ae0fa4974f7d78c2423f7d25d434f&auto=format&fit=crop&w=749&q=80")'}}>
                <div className="wrap-login100 p-t-190 p-b-30">
                  <form className="login100-form validate-form">
                    <div className="login100-form-avatar">
                      <img src="https://images.unsplash.com/photo-1513791149369-f88da26c8e93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baa8e845c4f064b63e31f7553152a194&auto=format&fit=crop&w=334&q=80" alt="AVATAR" />
                    </div>
                    <span className="login100-form-title p-t-20 p-b-45">
                      REGISTER HERE
                    </span>
                    <div className="wrap-input100 validate-input m-b-10" data-validate="Username is required">
                      <input className="input100" type="text" name="username" placeholder="Username" />
                      <span className="focus-input100" />
                      <span className="symbol-input100">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                    <div className="wrap-input100 validate-input m-b-10" data-validate="Password is required">
                      <input className="input100" type="text" name="pass" placeholder="Email Adress" />
                      <span className="focus-input100" />
                      <span className="symbol-input100">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                    <div className="wrap-input100 validate-input m-b-10" data-validate="Password is required">
                      <input className="input100" type="password" name="pass" placeholder="Password" />
                      <span className="focus-input100" />
                      <span className="symbol-input100">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                    <div className="container-login100-form-btn p-t-10">
                      <button className="login100-form-btn">
                        Register
                      </button>
                    </div>
                    <div className="text-center w-full">
                      <a className="txt1" href="/login">
                        Sudah Punya Akun?
                        <i className="fa fa-long-arrow-right" />						
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}

export default Register;