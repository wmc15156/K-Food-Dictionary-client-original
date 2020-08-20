import React from 'react';

class ContentsInfo extends React.Component {
    findFoodIndex(dish, lastFoodname) {
        for (let i = 0; i < dish.length; i++) {
            if (dish[i].foodname === lastFoodname) {
                return i;
            }
        }
    }

    render() {
        const dish = this.props.dish;
        const lastFoodname = this.props.lastFoodname;
        console.log('-------------',dish, lastFoodname,'---------------')
        let foodIdx = this.findFoodIndex(dish, lastFoodname);

        console.log(dish);
        console.log(`여기는콘텐츠인포123123123:${foodIdx}`);
        console.log(`여기는콘텐츠인포: ${lastFoodname}`);
        return (
            <div>
                <h3>{dish[foodIdx].foodname}</h3>
                <p>음식 정보 : {dish[foodIdx].foodInfo}</p>
                <p>꿀팁 : {dish[foodIdx].tip}</p>
                <p>맵기정도 : {dish[foodIdx].spicy}</p>
            </div>
        );
    }
}

export default ContentsInfo;