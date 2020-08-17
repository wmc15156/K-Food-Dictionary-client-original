/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages//Signup';
import Mypage from './pages//Mypage';
import axios from 'axios';
import Admin from "./pages/Admin"
import Contents from "./pages/Contents"
import Home from "./pages/Home"
import SeaList from "./pages/MainPageList/SeaList"
import MeatList from "./pages//MainPageList/MeatList"
import DessertList from "./pages//MainPageList/DessertList"
import OnboardNav from "./pages/OnboardNav"

// 로그인 시에만 admin 페이지로 갈 수 있는 조건이 필요합니다.

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: true,
      userinfo: {},
      foods: [
        { id: 1, foodname: '삼겹살', sort: 'meat1', url: "https://bit.ly/2Cq602i" },
        { id: 2, foodname: '안심', sort: 'meat', url: "https://bit.ly/3iIVtPp" },
        { id: 3, foodname: '닭다리', sort: 'meat', url: "https://bit.ly/33ZcoJ6" },
        { id: 4, foodname: '오리', sort: 'meat', url: "https://bit.ly/2XZJdlH" }
      ]
    };
  }


  handleIsLoginChange() {
    this.setState({ isLogin: true });
    axios.get('http://3.34.193.46:5000/user/info').then(res => {
      console.log(res.data);
      this.setState({ userinfo: res.data });
    });
  }

  render() {
    const { isLogin, userinfo } = this.state;
    console.log(isLogin, userinfo, '로그인 여부와 유저 인포');
    return (
      <div>
        <div>
          <OnboardNav isLogin={this.state.isLogin}></OnboardNav>
        </div>
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

            <Route exact path="/admin"><Admin /></Route>

            <Route exact path="/contents"><Contents /></Route>

            <Route exact path="/dessertList"><DessertList /></Route>

            <Route exact path="/meatList"><MeatList dish={this.state.foods} /></Route>

            <Route exact path="/seafoodList"><SeaList /></Route>

            <Route exact path="/"><Home /></Route>

          </Switch>
        </div >
      </div>
    );
  }
}
export default App;
