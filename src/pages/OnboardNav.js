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
        if (this.isLogin) {
            return <LogInNav></LogInNav>
        }
        return <LogOutNav></LogOutNav>
    }
}

export default OnboardNav;

OnboardNav.propTypes = {
    isLogin: PropTypes.bool
};