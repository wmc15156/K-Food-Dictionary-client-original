import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
        // eslint-disable-next-line react/prop-types
        const { handleIsLoginChange } = this.props;
        return (
            <div>
                <center>
                    <h1>Member Login</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            return axios
                                .post('http://3.34.193.46:5000/user/login', {
                                    email: email,
                                    password: password
                                })
                                .then(() => {
                                    handleIsLoginChange();
                                    // eslint-disable-next-line react/prop-types
                                    this.props.history.push('/');
                                })
                                .catch(err => console.log(err));
                        }}
                    >

                        <div>
                            <input
                                style={{
                                    width: '400px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                type="email"
                                placeholder="Eamil"
                                onChange={this.handleInputValue('email')}
                            ></input>
                        </div>
                        <div>
                            <input
                                style={{
                                    width: '400px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                type="password"
                                placeholder="Password"
                                onChange={this.handleInputValue('password')}
                            ></input>
                        </div>
                        <button
                            style={{
                                width: '200px',
                                height: '30px',
                                margin: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'lightblack',
                                color: "black"
                            }}
                            type="submit"
                        >
                            Login
                </button>
                    </form>
                </center>
            </div>
        );
    }
}

export default withRouter(Login);

