import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/logo.jpg";

class LogOutNav extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/" className="homelink">
                    <img className="mainPageLogo" src={img} alt="logo"></img>
                </Link>
                <Link to="/login" className="Navlink" >Login</Link>
                <Link to="/signup" className="Navlink">Signup</Link>
            </div>
        );
    }
}

export default LogOutNav;