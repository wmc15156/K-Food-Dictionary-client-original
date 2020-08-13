import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export function Mypage(props) {
    const { isLogin } = props;
    if (isLogin) {
        return (
            <div>
                <h1>Mypage</h1>
            </div>
        );
    }
}

