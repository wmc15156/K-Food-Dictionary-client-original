
/* eslint-disable react/prop-types */
import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import styled from 'styled-components';

const FoodList = styled(Table)`
  text-align: 'middle';
`;


// const deleteLikeFood = (e) => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   let data = e.target;
//   const foodName = data.parentNode.parentElement.parentElement.parentElement.childNodes[2].textContent;
//   axios.post('/product/likefood/delete',{ foodName: foodName},{ headers: { authorization: user } })
//   .then((res) => {
//     if(res.data.success) {
//       axios.get('/user/info', { headers: { authorization: user } })
//         .then((res) => {
//           // 새로고침시 userInfo 정보 업데이트
//           console.log(res.data,'res.data');
//           if(res.data.length > 1) {
//            this.props.updateUserInfo(res.data);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
    
//   })
//   .catch(e => {
//     console.log(e);
//     alert('음식정보를 지우지 못했습니다.')
//   })
// }

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  deleteLikeFood(e) {
    const user = JSON.parse(localStorage.getItem('user'));
    let data = e.target;
    const foodName = data.parentNode.parentElement.parentElement.parentElement.childNodes[2].textContent;
    axios.post('/product/likefood/delete',{ foodName: foodName},{ headers: { authorization: user } })
    .then((res) => {
      if(res.data.success) {
        axios.get('/user/info', { headers: { authorization: user } })
          .then((res) => {
            // 새로고침시 userInfo 정보 업데이트
            console.log(res.data,'res.data');
            if(res.data.length > 1) {
             this.props.updateUserInfo(res.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
    })
    .catch(e => {
      console.log(e);
      alert('음식정보를 지우지 못했습니다.')
    })
  }

  render() {
    console.log('redering')
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <div>{text}</div>,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
      },
      {
        title: 'foodName',
        dataIndex: 'foodname',
        key: 'foodname',
        render: text => <div className="foodname">{text}</div>
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={this.deleteLikeFood.bind(this)} className="delete">Delete</a>
          </Space>
        ),
      },
    ];

    if (this.props.isLogin === false) {
      alert('로그인 후 이용 가능합니다.');
      document.location.href = 'http://localhost:3000/login'
    }

    const userinfo = this.props.userinfo;
    var favoriteList = [];
    let data = [];

    for (let i = 1; i < userinfo.length; i++) {
      let favorFN = userinfo[i].foodname;
      let url = `/contents/${favorFN}`;
      let obj = {};
      obj.key = i;
      obj.name = userinfo.username || userinfo[0].username
      obj.image = <Link to={url}>
        <img width="100px" src={userinfo[i].image} alt="foods"></img>
      </Link>
      obj.foodname = favorFN;
      obj.tags = ['좋아요', favorFN, 'korean food']
      data.push(obj)
      favoriteList.push(
        <div className="favoriteFood">
          <a href={url}>
            <img src={userinfo[i].image} alt="foods"></img>
          </a>
          <span>
            {favorFN}
          </span>
        </div>
      )
    }
    return (
      <div>
        <h1>Mypage</h1>
        <div className="favoriteFood">찜한 음식</div>
        <div className="favoritFList">
          {userinfo.length > 1 ? <Table dataSource={data} columns={columns} /> :
            null
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Mypage);



