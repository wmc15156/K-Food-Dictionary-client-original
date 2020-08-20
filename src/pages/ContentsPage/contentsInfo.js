import React from 'react';
import { withRouter, Link,Route } from 'react-router-dom';
import App from '../../App'

let dbDish;
let dblastFoodname;

class ContentsInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: false
    };
  }
    findFoodIndex(dish, lastFoodname) {
        for (let i = 0; i < dish.length; i++) {
            if (dish[i].foodname === lastFoodname) {
                return i;
            }
        }
    }

    render() {
      
        let dish = this.props.dish;
        let lastFoodname = this.props.lastFoodname;
        if(lastFoodname !== 'undefined') {
          dbDish = dish;
          dblastFoodname = lastFoodname
        }
        if(lastFoodname === 'undefined') {
          lastFoodname = dblastFoodname;
          dish = dbDish;
        }

        console.log('-------------',dish, lastFoodname,'---------------')
        let foodIdx = this.findFoodIndex(dish, lastFoodname);
        console.log(`여기는콘텐츠인포123123123:${foodIdx}`);
        console.log(`여기는콘텐츠인포: ${lastFoodname}`);

       
        return (
            <div className="FoodInfoBox">
                <h3>{dish[foodIdx].foodname}</h3>
                <p>음식 정보 : {dish[foodIdx].foodInfo}</p>
                <p>꿀팁 : {dish[foodIdx].tip}</p>
                <p>맵기정도 : {dish[foodIdx].spicy}</p>
            </div>
        );
    }
}

export default withRouter(ContentsInfo);