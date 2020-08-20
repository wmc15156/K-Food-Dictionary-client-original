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