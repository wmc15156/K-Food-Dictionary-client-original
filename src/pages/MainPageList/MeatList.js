import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class MeatList extends React.Component {
    render() {
        if (!this.props.isLogin) {
            alert('로그인 후 이용 가능합니다.');
            document.location.href = 'http://localhost:3000/login'
        }
        // console.log(this.props.favoritPost(0));
        const { favoritPost } = this.props;
        const meatFoodDish = this.props.dish;

        let lists = [];

        let i = 0;
        while (i < meatFoodDish.length) {
            let url = `/contents/: ${meatFoodDish[i].foodname}`; // 세부 콘텐츠 페이지로 가야함.
            console.log(url)
            lists.push(
                <div key={meatFoodDish[i].id} >
                    <Link to={url}>
                        <p>
                            <img src={meatFoodDish[i].url} alt='seafoods'></img>
                        </p>
                        {meatFoodDish[i].foodname}
                        <button onClick={() => favoritPost(0)} className="favoritBt"  >찜</button>
                    </Link>
                </div >
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
