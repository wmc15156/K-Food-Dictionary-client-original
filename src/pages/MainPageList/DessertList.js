import React from "react";
import { Link } from "react-router-dom";
import dessertImg from "../../images/dessert.jpg"

// 이 파일은 곡물 리스트를 보여주는 페이지입니다
// 하단의 이미지 링크들을 클릭 시 곡물 카테고리로 이동합니다. 

class DessertList extends React.Component {
    render() {
        return (
            <div>
                <h1>Dessert Category</h1>
                <Link to="/contents"></Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
                <Link to="/contents" className="link"><img id="categoryImage" src={dessertImg} alt="main"></img>Dessert</Link>
            </div>
        )
    }
}

export default DessertList;

