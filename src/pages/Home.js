import React from "react";
import { Link } from "react-router-dom";
import meatImg from "../images/meat.jpg";
import seafoodImg from "../images/seafood.jpg";
import dessertImg from "../images/dessert.jpg";
import noodleImg from "../images/noodle.jpg"
// import back from '../images/back.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="homeP">

                {/* <h1 className="homePN">Home page</h1> */}
                <Link to="/dessertList" className="link">
                    <img id="mainPageImage" src={dessertImg} alt="main"></img>
                    DESSERT
                </Link>

                <Link to="/seafoodList" className="link">
                    <img id="mainPageImage" src={seafoodImg} alt="main"></img>
                    SEAFOOD
                </Link>

                <Link to="/meatList" className="link">
                    <img id="mainPageImage" src={meatImg} alt="main"></img>
                    MEAT
                </Link>

                <Link to="/noodleList" className="link">
                    <img id="mainPageImage" src={noodleImg} alt="main"></img>
                    NOODLE
                </Link>
            </div >
        );
    }
}

export default Home;
