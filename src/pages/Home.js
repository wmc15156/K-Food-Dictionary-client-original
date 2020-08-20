import React from "react";
import { Link } from "react-router-dom";
import meatImg from "../images/meat.jpg";
import seafoodImg from "../images/seafood.jpg";
import dessertImg from "../images/dessert.jpg";
import noodleImg from "../images/noodle.jpg"
import back from "../images/back.jpg"

class Home extends React.Component {
    render() {
        return (
            <div id='homeP' className="homeP">
                <img className="mainPI" src={back} alt="main"></img>
                <h1 className="HomeTitle">It's all about Korean Food</h1>
                <Link to="/dessertList" className="link">
                    DESSERT
                    <img id="mainPageImage" src={dessertImg} alt="main"></img>
                </Link>

                <Link to="/seafoodList" className="link">
                    SEAFOOD
                    <img id="mainPageImage" src={seafoodImg} alt="main"></img>

                </Link>

                <Link to="/meatList" className="link">
                    MEAT
                    <img id="mainPageImage" src={meatImg} alt="main"></img>

                </Link>

                <Link to="/noodleList" className="link">
                    NOODLE
                    <img id="mainPageImage" src={noodleImg} alt="main"></img>

                </Link>
            </div >
        );
    }
}

export default Home;
