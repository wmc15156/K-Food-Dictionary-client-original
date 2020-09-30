import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class SeaList extends React.Component {
    constructor(props) {
        super(props)

        const { handleFoodsChange } = this.props;
        handleFoodsChange('해산물');
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        var lists = [];
        const seaFoodDish = this.props.dish;

        let i = 0;
        while (i < seaFoodDish.length) {
            let foodname = seaFoodDish[i].foodname
            let url = `contents/${foodname}`;
            lists.push(
                <div key={seaFoodDish[i].id}>
                    <span>
                        {seaFoodDish[i].foodname}
                    </span>
                    <Link to={url}>
                        <p>
                            <img src={seaFoodDish[i].image} alt='foods' className="foodList"></img>
                        </p>
                    </Link>
                </div>
            )
            i = i + 1;
        }

        return (
            <div className="listTitle">
                <div>
                    <h2 className="listTitle">맛과 영양이 풍부한 해산물 요리!</h2>
                </div>
                <div>
                    {lists}
                </div>

            </div>
        )
    }
}
SeaList.propTypes = {
    dish: PropTypes.array,
};

export default SeaList;

