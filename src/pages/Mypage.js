/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import styled from 'styled-components';

const FoodList = styled(Table)`
  text-align: 'middle';
`;

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
        <a>Delete</a>
      </Space>
    ),
  },
];

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
  
    if (this.props.isLogin === false) {
      alert('로그인 후 이용 가능합니다.');
      document.location.href = 'http://localhost:3000/login'
    }

    const userinfo = this.props.userinfo;
    var favoriteList = [];
    let data = [];
    for (let i = 1; i < userinfo.length; i++) {
      let favorFN = userinfo[i].foodname;
      let url = `http://localhost:3000/contents/${favorFN}:${i - 1}`;
      let obj = {};
      obj.key = i;
      obj.name = userinfo.username || userinfo[0].username
      obj.image = <a href={url}>
        <img width="100px" src={userinfo[i].image} alt="foods"></img>
      </a>
      obj.foodname = favorFN;
      obj.tags = ['좋아요', favorFN,'korean food']
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
      console.log()
    }
    return (
      <div>
        <h1>Mypage</h1>
        <div className="favoriteFood">찜한 음식</div>
        <div className="favoritFList">
          {userinfo.length > 1 ? <FoodList dataSource={data} columns={columns} /> :
            null
          }
          
        </div>
      </div>
    )
  }
}

export default withRouter(Mypage);
