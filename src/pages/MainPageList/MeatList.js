import React from 'react';
import PropTypes from 'prop-types';

class MeatList extends React.Component {

    render() {
        var lists = [];
        const meatFoodDish = this.props.dish;
        const { favoritPost } = this.props;

        let i = 0;
        while (i < meatFoodDish.length) {
            let url = `http://localhost:3000/contents/${meatFoodDish[i].foodname}`;
            lists.push(
                <div>
                    <a href={url}>
                        <p>
                            <img src={meatFoodDish[i].url} alt='seafoods'></img>
                        </p>
                    </a>
                    <span>
                        {meatFoodDish[i].foodname}
                    </span>
                    <button onClick={() => favoritPost(0)} className="favoritzBt" >찜</button>
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
