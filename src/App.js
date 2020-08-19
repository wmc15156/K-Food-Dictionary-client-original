/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages//Signup';
import Mypage from './pages//Mypage';
import axios from 'axios';
import Admin from "./pages/Admin"
import Contents from "./pages/Contents"
import Home from "./pages/Home"
import SeaList from "./pages/MainPageList/SeaList"
import MeatList from "./pages/MainPageList/MeatList"
import DessertList from "./pages/MainPageList/DessertList"
import OnboardNav from "./pages/OnboardNav";
import NotFound from "./pages/NotFound";
import LogOut from "./pages/LogOut";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false,
      userinfo: {},
      foods: [
        { id: 1, foodname: '삼겹살', sort: 'meat1', url: "https://bit.ly/2Cq602i" },
        { id: 2, foodname: '안심', sort: 'meat', url: "https://bit.ly/3iIVtPp" },
        { id: 3, foodname: '닭다리', sort: 'meat', url: "https://bit.ly/33ZcoJ6" },
        { id: 4, foodname: '오리', sort: 'meat', url: "https://bit.ly/2XZJdlH" }
      ]
    };
  }

  //로그인시 상태,유저정보 업데이트
  handleIsLoginChange() {
    this.setState({ isLogin: true });
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get('http://3.34.193.46:5000/user/info', { headers: { authorization: user } })
      .then(res => {
        this.setState({ userinfo: res.data });
      });
  }

  //로그아웃 기능
  handleIsLogoutChange() {
    this.setState({ isLogin: false });
    localStorage.clear()
  }

  //찜클릭시 서버로 post
  favoritPost(id) {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(this.state.userinfo.email);
    console.log(this.state.foods[0].foodname);


    axios.post('http://3.34.193.46:5000/product/like/:productId', {
      foodname: this.state.foods[0].foodname
    }, { authorization: user })
      .then(res => {
        console.log(res)
      })
  }

  //마이페이지에 찜음식 랜더위한 get
  //찜목록 음식데이터 가져옴
  //음식이름으로 url만듬 (예 : http://localhost:3000/contents/삼겹살)
  //그 음식을 클릭하면 그 url로 가게함

  favoritGet() {
    axios.get('http://3.34.193.46:5000/product/sort/:productId/')
      .then(res => {
        console.log(res);
        let url = `http://localhost:3000/contents/${res.fooodname}`
        // document.location.href = { url };
      })
  }

  componentDidMount() {
    // 이부분은 테스트용도로 만들었습니다. -현진-
    // 최초 업로드될때 유저정보를 불러와서 로그인상태여부 확인용도
    // 에러 나는부분
    console.log('로딩');
    axios.get('http://localhost:5000/user/info')
  }
  render() {
    const { isLogin, userinfo } = this.state;
    console.log(isLogin, userinfo, '로그인 여부와 유저 인포');
    return (
      <BrowserRouter>
        <OnboardNav isLogin={isLogin}></OnboardNav>
        <div className="mainPageBox">
          <Switch>
            <Route exact path="/login"
              render={() => (<Login isLogin={isLogin}
                handleIsLoginChange={this.handleIsLoginChange.bind(this)} />)}
            />
            <Route exact path="/signup"
              render={() => <Signup isLogin={isLogin} />}
            />
            <Route exact path="/mypage"
              render={() => <Mypage isLogin={isLogin} userinfo={userinfo} favoritGet={this.favoritGet.bind(this)} />}
            />
            <Route exact path="/logout" render={() => <LogOut isLogin={isLogin} handleIsLogoutChange={this.handleIsLogoutChange.bind(this)} />} />
            <Route exact path="/admin"><Admin /></Route>
            <Route exact path="/contents/:name"><Contents /></Route>
            <Route exact path="/meatList"><MeatList dish={this.state.foods} isLogin={isLogin} /></Route>
            <Route exact path="/dessertList"><DessertList isLogin={isLogin} /></Route>
            <Route exact path="/seafoodList"><SeaList isLogin={isLogin} /></Route>
            <Route exact path="/"><Home /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </div >
      </BrowserRouter>
    );
  }
}
export default App;

