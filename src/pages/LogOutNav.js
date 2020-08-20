import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/logo.jpg";

class LogOutNav extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/login" className="link" >Login</Link>
                <Link to="/signup" className="link">Signup</Link>
                <Link to="/" className="homelink">
                    <img className="mainPageLogo" src={img} alt="logo"></img>
                </Link>
            </div>
        );
    }
}

export default LogOutNav;