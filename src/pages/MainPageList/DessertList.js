import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class DessertList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('디저트');
    }

    render() {
        var lists = [];
        const dessertFoodDish = this.props.dish;

        let i = 0;
        while (i < dessertFoodDish.length) {
            let foodname = dessertFoodDish[i].foodname
            let url = `contents/${foodname}`;
            lists.push(
                <div key={dessertFoodDish[i].id}>
                    <span>
                        {dessertFoodDish[i].foodname}
                    </span>
                    <Link to={url}>
                        <p>
                            <img src={dessertFoodDish[i].image} alt='foods' className="foodList"></img>
                        </p>
                    </Link>
                </div>
            )
            i = i + 1;
        }

        return (
            <div>
                <h2>디저트 배는 따로 있습니다.</h2>
                {lists}
            </div>
        )
    }
}
DessertList.propTypes = {
    dish: PropTypes.array,
};


export default DessertList;

