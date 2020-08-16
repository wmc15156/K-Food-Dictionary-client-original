/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

class Facebook extends React.Component {

    state = {
        isLogIn: false,
        name: '',
        userID: '',
        email: '',
        picture: ''
    }

    responseFacebook = (resp) => {
        console.log(resp);
        alert('연결된 계정으로 로그인이 되었습니다.')
        this.props.history.push('/mypage');

        this.setState({
            isLogIn: true,
            name: resp.name,
            userID: resp.userID,
            email: resp.email,
            picture: resp.picture.data.url
        });
    }

    render() {
        let fbContent;

        if (this.state.isLogIn) {
            fbContent = (
                <div></div>
            )
        } else {
            //facebook에서 제공받은 api로 로그인 버튼 기능 추가
            fbContent = (<FacebookLogin
                appId="352284492474023"  // 생성한 앱아이디
                autoLoad={false}
                fields="name,email,picture"    // 페이스북에서 가져올 필드
                callback={this.responseFacebook}    // 콜백함수 지정
                icon="fab fa-facebook"
            />
            )
        }

        return (
            <span>{fbContent}</span>
        )
    }
}

export default withRouter(Facebook);

