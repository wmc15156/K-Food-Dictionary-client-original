import React from 'react';
import LogInNav from './LogInNav';
import LogOutNav from './LogOutNav';
import PropTypes from 'prop-types';

class OnboardNav extends React.Component {
    constructor(props) {
        super(props)
        this.isLogin = this.props.isLogin;
    }
    render() {
        // console.log(this.props.email, 'prppppp');
        // const data = email[0].email || email.email;
        // console.log(data,'data');
        return (<div className="NavBar">
            {this.props.isLogin ? (
                <LogInNav email={this.props.email}></LogInNav>
            ) : (
                    <LogOutNav ></LogOutNav>
                )}
        </div>
        )
    }
}

export default OnboardNav;

OnboardNav.propTypes = {
    isLogin: PropTypes.bool
};