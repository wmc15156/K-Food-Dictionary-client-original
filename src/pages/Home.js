import React from "react";
import { Link } from "react-router-dom";
import meatImg from "../images/meat.jpg";
import seafoodImg from "../images/seafood.jpg";
import dessertImg from "../images/dessert.jpg";
import noodleImg from "../images/noodle.jpg"

// 이 페이지는 홈 페이지입니다.
// 대분류 카테고리로써 세가지의 이미지 분류로 나눴습니다.
// 이미지 링크 클릭시 해당 소규모 카테고리로 이동합니다.
// 이미지 클릭시 해당 음식 카테고리로 넘어가는 서버 요청 기능이 필요합니다. 

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
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
