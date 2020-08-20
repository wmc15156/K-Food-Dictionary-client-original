/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter, withRouter } from 'react-router-dom';

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
import NoodleList from './pages/MainPageList/NoodleList';

axios.defaults.baseURL = 'http://3.34.193.46:5000';
// 3.34.193.46:5000/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: "",
      userinfo: {},
      email: '',
      foods: props.initData // []
    };
  }

  handleFoodsChange(kindOf) {
    axios.get(`/product/sort/${kindOf}`)
      .then(res => {
        this.setState({ foods: res.data.data });
      });
  }

  handleIsLoginChange() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ isLogin: true });
    axios.get('/user/info',
      { headers: { authorization: user } })
      .then(res => {
        this.setState({
          userinfo: res.data,
          email: res.data.email || res.data[0].email
        });
      });
  }

  handleIsLogoutChange() {
    this.setState({ isLogin: false });
    localStorage.clear()
  }
  
  updateUserInfo(data) {
    console.log('update');
    this.setState({
      userinfo: data,
    })
  }

  //찜이 되었을때, 원래 찜된목록일때 표시해야함
  favoritPost(foodname) {
    console.log(foodname, '213213213123----------')
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get(`product/like/${foodname}`, { headers: { authorization: user } })
      .then(() => {
        axios.get('/user/info',
          { headers: { authorization: user } })
          .then(res => {
            this.setState({
              userinfo: res.data,
            });
          });
      })
    alert('찜 완료!')
  }

  componentDidMount() {
    // 이부분은 테스트용도로 만들었습니다. -현진-
    // 최초 업로드될때 유저정보를 불러와서 로그인상태여부 확인용도
    // 에러 나는부분

    console.log('로딩');
    let googleurl = window.location.href.split('=')
    if (googleurl[1]) {
      googleurl = googleurl[1].slice(0, googleurl[1].length - 1);
      localStorage.setItem('user', JSON.stringify(googleurl));
      this.props.history.push('/');
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.setState({
        isLogin: true
      });
      axios.get('/user/info', { headers: { authorization: user } })
        .then((res) => {
          // 새로고침시 userInfo 정보 업데이트
          if(res.data.length > 1) {
            this.setState({
              userinfo: res.data,
            });
          }
          this.setState({
            email: res.data.email || res.data[0].email
          });
        })
        .catch((err) => {
          console.log(err);
          localStorage.clear();
          alert('시간이 지났습니다. 로그인을 다시해주세요 ')
          this.props.history.push('/');
        });
    } else {
      this.setState({
        isLogin: false
      });
    }
  }

  render() {
    const { isLogin, userinfo, email } = this.state;
    return (
      <BrowserRouter>
        <OnboardNav isLogin={isLogin} email={email}></OnboardNav>
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
              render={() => <Mypage isLogin={isLogin} userinfo={userinfo} updateUserInfo={this.updateUserInfo.bind(this)}/>}
            />
            <Route exact path="/logout" render={() => <LogOut isLogin={isLogin} handleIsLogoutChange={this.handleIsLogoutChange.bind(this)} />} />
            <Route exact path="/admin"><Admin /></Route>
            <Route exact path="/meatList"><MeatList dish={this.state.foods} isLogin={isLogin} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/dessertList"><DessertList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/seafoodList"><SeaList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/noodleList"><NoodleList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/contents/:name"><Contents favoritPost={this.favoritPost.bind(this)} dish={this.state.foods}/></Route>
            <Route exact path="/"><Home /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </div >
      </BrowserRouter>
    );
  }
}
export default withRouter(App);

