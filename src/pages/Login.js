/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Facebook from "./Facebook";

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };


  render() {
    const { email, password } = this.state;
    const { handleIsLoginChange } = this.props;

    return (
      <div className="loginBack">
        <center className="loginBox" >
          <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
          <h1>Login</h1>

          <form
            onSubmit={e => {
              e.preventDefault();
              return axios
                .post('http://3.34.193.46:5000/user/login', {
                  email: email,
                  password: password
                })
                .then((res) => {
                  localStorage.setItem('user', JSON.stringify(res.data.token));
                  handleIsLoginChange();
                  this.props.history.push('/mypage');
                })
                .catch(err => console.log(err));
            }}
          >

            <div>
              <input className="inputForm"
                type="email"
                placeholder="Eamil"
                onChange={this.handleInputValue('email')}>
              </input>
            </div>

            <div>
              <input className="inputForm"
                type="password"
                placeholder="Password"
                onChange={this.handleInputValue('password')}>
              </input>
            </div>
            <div>
              <button className="loginBtn" type="submit">
                Login
            </button>
            </div>
            <div id="snsLogin">
              <span className="fbLogin">
                <Facebook />
              </span>

              {/* 밑의 구글로그인 부분은 a태그로 무조건 감싸져야 합니다. -현진- */}
              <a href="http://3.34.193.46.xip.io:5000/auth/google" className="googleBtn">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />Google with Login</a>
            </div>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);

