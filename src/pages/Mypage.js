/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        console.log('로그인 여부 :' + this.props.isLogin)

        if (!this.props.isLogin) {
            alert('로그인 후 이용 가능합니다.');
            document.location.href = 'http://localhost:3000/login'
        }

        const userinfo = this.props.userinfo;
        var favoriteList = [];
        for (let i = 1; i < userinfo.length; i++) {
            let favorFN = userinfo[i].foodname;
            let url = `http://localhost:3000/contents/${favorFN}`;
            favoriteList.push(
                <div className="favoriteFood">
                    <a href={url}>
                        <img src={userinfo[i].image} alt="foods"></img>
                    </a>
                    <span>
                        {favorFN}
                    </span>
                </div>
            )
        }

        return (
            <div>
                <h1>Mypage</h1>

                <div className="favoriteFood">찜한 음식</div>
                <div className="favoritFList">
                    {favoriteList}
                </div>


            </div>
        )
    }
}

export default withRouter(Mypage);
