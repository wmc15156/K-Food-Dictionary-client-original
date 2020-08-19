import React from "react";
import PropTypes from 'prop-types';

// 이 파일은 디저트 리스트를 보여주는 페이지입니다
// 하단의 이미지 링크들을 클릭 시 곡물 카테고리로 이동합니다. 

class DessertList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('디저트');
    }

    render() {
        var lists = [];
        const dessertFoodDish = this.props.dish;
        const { favoritPost } = this.props;

        let i = 0;
        while (i < dessertFoodDish.length) {
            let url = `http://localhost:3000/contents/${dessertFoodDish[i].foodname}`;
            lists.push(
                <div key={dessertFoodDish[i].id}>
                    <a href={url}>
                        <p>
                            <img src={dessertFoodDish[i].image} alt='foods'></img>
                        </p>
                    </a>
                    <span>
                        {dessertFoodDish[i].foodname}
                    </span>
                    <button onClick={() => favoritPost(0)} className="favoritzBt" >찜</button>
                </div>
            )
            i = i + 1;
        }

        return (
            <div>
                <h2 >디저트 페이지입니다.</h2>
                {lists}
            </div>
        )
    }
}
DessertList.propTypes = {
    dish: PropTypes.array,
};


export default DessertList;

