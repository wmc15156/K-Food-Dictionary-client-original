import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class MeatList extends React.Component {

    render() {
        var lists = [];
        const meatFoodDish = this.props.dish;

        let i = 0;
        while (i < meatFoodDish.length) {
            let foodname = meatFoodDish[i].foodname
            let url = `contents/${foodname}`;
            lists.push(
                <div>
                    <Link to={url}>
                        <p>
                            <img src={meatFoodDish[i].url} ></img>
                        </p>
                    </Link>
                    <span>
                        {foodname}
                    </span>
                </div>
            )
            i = i + 1;
        }

        return (
            <div>
                <h2 >육류 페이지입니다.</h2>
                {lists}
            </div>
        )
    }
}
MeatList.propTypes = {
    dish: PropTypes.array,
};


export default MeatList;
