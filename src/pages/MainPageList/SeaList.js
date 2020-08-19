import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class SeaList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('해산물');
    }
    render() {
        var lists = [];
        const seaFoodDish = this.props.dish;

        let i = 0;
        while (i < seaFoodDish.length) {
            let foodname = seaFoodDish[i].foodname
            let url = `contents/${foodname}:${i}`;
            lists.push(
                <div key={seaFoodDish[i].id}>
                    <Link to={url}>
                        <p>
                            <img src={seaFoodDish[i].image} alt='foods'></img>
                        </p>
                    </Link>
                    <span>
                        {seaFoodDish[i].foodname}
                    </span>
                </div>
            )
            i = i + 1;
        }

        return (
            <div>
                <h2 >해산물 페이지입니다.</h2>
                {lists}
            </div>
        )
    }
}
SeaList.propTypes = {
    dish: PropTypes.array,
};

export default SeaList;

