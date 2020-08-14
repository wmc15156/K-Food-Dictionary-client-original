import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

// export function Mypage(props) {
//     const { isLogin } = props;
//     if (isLogin) {
//         return (
//             <div>
//                 <h1>Mypage</h1>
//             </div>
//         );
//     }
// }

class Mypage extends React.Component {
    render() {
        return (
            <div>
                <h1>Mypage 입니다</h1>
            </div>
        )
    }
}


export default Mypage;