import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to="/signin" className="link" >Login</Link>
                    <Link to="/signup" className="link">Singup</Link>
                    <Link to="/" className="homelink">Home</Link>
                </div>
            </div >
        )
    }
}

export default Nav;