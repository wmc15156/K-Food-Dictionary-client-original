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
      <div>
        <center>

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
            <button className="button" type="submit">
              Login
                        </button>

            <span className="fbLogin">
              <Facebook />
            </span>
            < span>
              <a>버튼</a>
            </span>

          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);

