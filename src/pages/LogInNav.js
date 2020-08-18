import React from 'react';
import { Link } from "react-router-dom";
import img from "../images/logo.jpg";

class LogInNav extends React.Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to="/admin" className="link">Admin</Link>
                    <Link to="/mypage" className="link">Mypage</Link>
                    <Link to="/logout" className="link">Logout</Link>
                    <Link to="/" className="homelink">
                        <img className="mainPageLogo" src={img} alt="logo"></img>
                    </Link>
                </div>
            </div >
        );
    }
}

export default LogInNav;