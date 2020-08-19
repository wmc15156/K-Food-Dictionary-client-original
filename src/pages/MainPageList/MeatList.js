import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Contents from '../Contents';

class MeatList extends React.Component {

    fixedFoodname(foodname) {
        let fixed = foodname;
        console.log(fixed);
    }

    render() {
        var lists = [];
        const meatFoodDish = this.props.dish;

        let i = 0;
        while (i < meatFoodDish.length) {
            let foodname = meatFoodDish[i].foodname
            console.log(foodname)
            let url = `contents/${foodname}`;
            lists.push(
                <div>
                    <Link to={url} onClick={(foodname) => this.fixedFoodname(foodname)}>
                        <p>
                            <img src={meatFoodDish[i].url} alt='seafoods'></img>
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
                <div>
                    <Contents />
                </div>
                <div>
                    <h2 >육류 페이지입니다.</h2>
                    {lists}
                </div>
            </div>
        )
    }
}
MeatList.propTypes = {
    dish: PropTypes.array,
};

export default MeatList;
