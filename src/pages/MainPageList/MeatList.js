import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class MeatList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('고기');
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        var lists = [];
        const meatFoodDish = this.props.dish;

        let i = 0;
        while (i < meatFoodDish.length) {
            let foodname = meatFoodDish[i].foodname
            let url = `contents/${foodname}`;
            lists.push(
                <div key={meatFoodDish[i].id}>
                    <span>
                        {foodname}
                    </span>
                    <Link to={url}>
                        <p>
                            <img src={meatFoodDish[i].image} alt="foods" className="foodList"></img>
                        </p>
                    </Link>
                </div>
            )
            i = i + 1;
        }

        return (

            <div className="listTitle">
                <div>
                    <h2 className="listTitle">저기압일 땐? 고기 앞으로!</h2>
                </div>
                <div>
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
