import React from 'react';
import { Route } from 'react-router-dom';
import crabImg from '../images/crab.jpg'

class Main extends React.Component {
    render() {
        return (
            <div className="mainPageBox">
                <div>
                    안녕하세요.
                    <Route path="/meat"><img id="mainPageImage" src={crabImg} alt="main"></img>육류</Route>
                    <Route path="/seafood"><img id="mainPageImage" src={crabImg} alt="main"></img>해산물</Route>
                    <Route path="/grain"><img id="mainPageImage" src={crabImg} alt="main"></img>곡물</Route>
                </div>
            </div>
        );
    }
}


export default Main;