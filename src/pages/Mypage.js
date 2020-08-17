/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

// 로그인 상태에서 mypage 이동 시 해당 찜 리스트 서버에서 받아오기
// 로그인 안되 있는 상태에서 mypage 들어올 시 로그인 안되어있다는 안내 후 로그인페이지로 

class Mypage extends React.Component {

    render() {
        function AdminPage(e) {
            e.preventDefault();
            window.location = 'http://localhost:3000/admin';
        }

        return (
            <div>
                <h1>Mypage</h1>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        axios
                            .post('http://3.34.193.46:5000/user/logout', this.state)
                            .then(res => {
                                if (res.status === 302) {
                                    alert('로그아웃이 완료되었습니다')
                                    this.props.history.push('/login')
                                }
                            })
                            .catch(err =>
                                console.log(err),
                            );
                    }}
                >

                    <div className="mypageBt">
                        <button className="adminBt" onClick={AdminPage}>
                            Admin
                    </button>
                        <button className="logoutBt" type="submit">
                            Logout
                     </button>
                    </div>

                    <div className="userInfo">유저 정보입니다</div>
                    <div className="favoriteFood">찜한 음식입니다</div>
                </form>
            </div>
        )
    }
}


export default withRouter(Mypage);