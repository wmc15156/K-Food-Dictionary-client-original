import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class MeatList extends React.Component {
    render() {
        let lists = [];
        const meatFoodDish = this.props.dish;

        let i = 0;
        while (i < meatFoodDish.length) {
            let url = `/contents/${meatFoodDish[i].id}`; // 세부 콘텐츠 페이지로 가야함.
            lists.push(
                <div key={meatFoodDish[i].id} >
                    <Link to={url}>
                        <p>
                            <img src={meatFoodDish[i].url} alt='seafoods'></img>
                        </p>
                        {meatFoodDish[i].foodname}
                    </Link>
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
