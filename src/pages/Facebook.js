import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {

    state = {
        isLogIn: false,
        name: '',
        userID: '',
        email: '',
        picture: ''
    }

    responseFacebook(resp) {
        console.log(resp);
    }

    render() {
        let fbContent;

        if (this.state.isLogIn) {
            fbContent = (
                alert('연결된 계정으로 로그인이 되었습니다.')
                //mypage로 가기
            )
        } else {
            //facebook에서 제공한 api받아 로그인 버튼 기능 추가
            fbContent = (<FacebookLogin
                appId="352284492474023"  // 생성한 앱아이디
                autoLoad={false}
                fields="name,email,picture"    // 페이스북에서 가져올 필드
                callback={this.responseFacebook}    // 콜백함수 지정
                icon="fab fa-facebook"
            />)
        }

        return (
            <span>{fbContent}</span>
        )
    }
}

export default Facebook;

