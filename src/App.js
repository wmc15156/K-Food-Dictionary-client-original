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
import NoodleList from './pages/MainPageList/NoodleList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: "",
      userinfo: {},
      email: '',
      foods: [
        { id: 1, foodname: '삼겹살', sort: 'meat1', url: "https://bit.ly/2Cq602i" },
        { id: 2, foodname: '안심', sort: 'meat', url: "https://bit.ly/3iIVtPp" },
        { id: 3, foodname: '닭다리', sort: 'meat', url: "https://bit.ly/33ZcoJ6" },
        { id: 4, foodname: '오리', sort: 'meat', url: "https://bit.ly/2XZJdlH" }
      ]
    };
  }

  handleFoodsChange(kindOf) {
    axios.get(`http://3.34.193.46:5000/product/sort/${kindOf}`)
      .then(res => {
        console.log(res.data.data)
        this.setState({ foods: res.data.data });
      });
  }

  handleIsLoginChange() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ isLogin: true });
    axios.get('http://3.34.193.46:5000/user/info', { headers: { authorization: user } })
      .then(res => {
        console.log(res.data, 'email')
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

  favoritPost(foodname) {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://3.34.193.46:5000/product/like/${foodname}`, { headers: { authorization: user } })
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount() {
    // 이부분은 테스트용도로 만들었습니다. -현진-
    // 최초 업로드될때 유저정보를 불러와서 로그인상태여부 확인용도
    // 에러 나는부분
    console.log('로딩');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.setState({
        isLogin: true
      });
      axios.get('http://3.34.193.46:5000/user/info', { headers: { authorization: user } })
        .then((res) => {
          console.log('res');
          console.log(res);
          this.setState({
            email: res.data.email || res.data[0].email
          });
        })
    } else {
      this.setState({
        isLogin: false
      });
    }

  }

  render() {
    console.log(this.state.email, 222222);
    const { isLogin, userinfo, email } = this.state;
    console.log(isLogin, userinfo, '로그인 여부와 유저 인포');
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
              render={() => <Mypage isLogin={isLogin} userinfo={userinfo} />}
            />
            <Route exact path="/logout" render={() => <LogOut isLogin={isLogin} handleIsLogoutChange={this.handleIsLogoutChange.bind(this)} />} />
            <Route exact path="/admin"><Admin /></Route>
            <Route exact path="/meatList"><MeatList dish={this.state.foods} isLogin={isLogin} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/dessertList"><DessertList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/seafoodList"><SeaList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/noodleList"><NoodleList isLogin={isLogin} dish={this.state.foods} handleFoodsChange={this.handleFoodsChange.bind(this)} /></Route>
            <Route exact path="/contents/:name"><Contents favoritPost={this.favoritPost.bind(this)} dish={this.state.foods} /></Route>
            <Route exact path="/"><Home /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </div >
      </BrowserRouter>
    );
  }
}
export default App;

