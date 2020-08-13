import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to="/signin" className="link">로그인</Link>
                    <Link to="/signup" className="link">회원가입</Link>
                    <Link to="/meat" className="link">육류</Link>
                    <Link to="/seafood" className="link">해산물</Link>
                    <Link to="/grain" className="link">곡물</Link>
                </div>
            </div>
        )
    }
}

export default Nav;