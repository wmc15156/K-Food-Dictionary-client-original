/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";

//3.34.193.46:5000
axios.defaults.withCredentials = true;
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            mobile: ''
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = key => e => {
        this.setState({ [key]: e.target.value });
    };

    handleOnConfirmPasswordInput(confirmPasswordInput) {
        this.setState({ confirmPassword: confirmPasswordInput });
    }

    doesPasswordMatch() {
        const { password, confirmPassword } = this.state;
        return password === confirmPassword;
    }

    confirmPasswordClassName() {
        const { confirmPassword } = this.state;

        if (confirmPassword) {
            return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
        }
    }

    renderFeedbackMessage() {
        const { confirmPassword } = this.state;

        if (confirmPassword) {
            if (!this.doesPasswordMatch()) {
                return (
                    <div className="invalid-feedback">The password does not match</div>
                );
            }
        }
    }

    render() {
        const { email, password, mobile, username } = this.state;
        return (
            <div>
                <center>
                    <h1>Sign Up</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            axios
                                .post('/user/signup', this.state)
                                .then(res => {
                                    if (res.status === 409) {
                                        alert('계정이 이미 존재합니다')
                                        this.props.history.push('/')
                                    }
                                    else if (res.status === 200) {
                                        alert('가 입이 완료되었습니다^^')
                                        this.props.history.push('/login')
                                    }
                                })
                                .catch(err =>
                                    console.log(err),
                                    // alert('가입에 실패했습니다.')
                                );
                        }}
                    >

                        <div>
                            <input className="inputForm"
                                placeholder="User Name"
                                onChange={this.handleInputValue('username')}
                            >
                            </input>
                        </div>

                        <div>
                            <input className="inputForm" type="email"
                                placeholder="Email"
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

                        <div >
                            <input
                                type="password"
                                className="inputForm"
                                id="confirmPasswordInput"
                                placeholder="Password Confirm"
                                onChange={e =>
                                    this.handleOnConfirmPasswordInput(e.target.value)
                                }
                            />
                            {this.renderFeedbackMessage()}
                        </div>

                        <button className="button" type="submit">
                            Signup
                        </button>
                    </form>
                </center>
            </div >
        );
    }
}

export default withRouter(Signup);
