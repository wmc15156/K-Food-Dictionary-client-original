/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

//-mypage 이동 시 해당 찜 리스트 서버에서 받아오는 방법
//찜목록 받아올 수 있는 레이아웃만들기
//음식 클릭시 data요청(음식 이름보냄)
//서버에서 음식이름으로 data를 찾아서 해당 url가져옴
//그 url로 이동

class Mypage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        // if (!this.props.isLogin) {
        //     alert('로그인 후 이용 가능합니다.');
        //     document.location.href = 'http://localhost:3000/login'
        // }

        function AdminPage(e) {
            e.preventDefault();
            window.location = 'http://localhost:3000/admin';
        }

        return (
            <div>
                <h1>Mypage</h1>

                <div className="mypageBt">
                    <button className="adminBt" onClick={AdminPage}>
                        Admin
                        </button>

                </div>
                {/* <div className="userInfo">유저 정보입니다</div> */}
                <div className="favoriteFood">찜한 음식</div>

            </div>
        )
    }
}

export default withRouter(Mypage);