import React from 'react';
import { Link } from 'react-router-dom';
import crabImg from '../images/crab.jpg'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/grain" className="link"><img id="mainPageImage" src={crabImg} alt="main"></img>GRAIN</Link>
                <Link to="/seafood" className="link"><img id="mainPageImage" src={crabImg} alt="main"></img>SEAFOOD</Link>
                <Link to="/meat" className="link"><img id="mainPageImage" src={crabImg} alt="main"></img>MEAT</Link>
            </div >
        );
    }
}

export default Home;
