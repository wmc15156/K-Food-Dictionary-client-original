import React from 'react';
import { withRouter } from "react-router-dom";

class LogOut extends React.Component {
    render() {
        console.log("로그인여부:" + this.props.isLogin);
        if (this.props.isLogin) {
            this.props.handleIsLogoutChange();
        } else {
            this.props.history.push('/')
            alert('로그아웃 되었습니다 :)')
        }
        return (
            <h1>
                로.딩.중...
            </h1 >
        );
    }
}
export default withRouter(LogOut);