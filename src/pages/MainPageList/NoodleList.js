import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class NoodleList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('면');
    }

    render() {
        var lists = [];
        const noodleFoodDish = this.props.dish;

        let i = 0;
        while (i < noodleFoodDish.length) {
            let foodname = noodleFoodDish[i].foodname
            let url = `contents/${foodname}
            `;
            lists.push(
                <div key={noodleFoodDish[i].id}>
                    <Link to={url}>
                        <p>
                            <img src={noodleFoodDish[i].image} alt="foods"></img>
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
                <h2 >누들 페이지입니다.</h2>
                {lists}
            </div>
        )
    }
}
NoodleList.propTypes = {
    dish: PropTypes.array,
};


export default NoodleList;
