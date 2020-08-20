import React from 'react';

class ContentsInfo extends React.Component {
    render() {
        const dish = this.props.dish;
        const foodNum = this.props.foodNum;
        console.log(dish);
        return (
            <div>
                <h3>{dish[foodNum].foodname}</h3>
                <p>음식 정보 : {dish[foodNum].foodInfo}</p>
                <p>꿀팁 : {dish[foodNum].tip}</p>
                <p>맵기정도 : {dish[foodNum].spicy}</p>
            </div>
        );
    }
}

export default ContentsInfo;