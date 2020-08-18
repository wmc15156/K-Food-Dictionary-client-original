import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Row, Col, Form, Button, Input, Rate } from 'antd';
import FileUpload from './upload';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const desc = ['맵지않음', '약간매움', '적당히매움', '매움', '많이 매움'];
// 이 페이지는 관리자 페이지입니다. 
// 아직 기능 구현 전이라 임의의 입력 폼 레이아웃만 짜놨습니다.

// class Admin extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Admin page</h1>
//                 <center>
//                     <div>
//                         <input className="inputForm"
//                             type="foodPicture"
//                             placeholder="food picture">
//                         </input>
//                     </div>

//                     <div>
//                         <input className="inputForm"
//                             type="foodName"
//                             placeholder="food name">
//                         </input>
//                     </div>

//                     <div>
//                         <input className="inputForm"
//                             type="foodInfo"
//                             placeholder="food info">
//                         </input>
//                     </div>

//                     <div>
//                         <input className="inputForm"
//                             type="tip"
//                             placeholder="tip">
//                         </input>
//                     </div>

//                     <div>
//                         <input className="inputForm"
//                             type="spicy"
//                             placeholder="spicy">
//                         </input>
//                     </div>
//                 </center>
//             </div>
//         )
//     }
// }

const Admin = (props) => {
  const [Image, setImage] = useState([])
  const [foodName, setFoodName] = useState('');
  const [foodInfo, setFoodInfo] = useState('');
  const [foodSort, setfoodSort] = useState('');
  const [tip, setTip] = useState('');
  const [spicy, setSpicy] = useState(3);
  const [value, setValue] = useState(3);

  const updateImages = (newImages) => {
    // 자식컴포넌트 값 부모 컴포넌트로 끌어올리기(lift-up)
    // 해당이미지
    console.log(Image)
    setImage(newImages);
  }
  const onChangeName = (e) => {
    // 인풋창에 글 입력시 업데이트
    setFoodName(e.target.value);
  };

  const onChangeFoodSort = (e) => {
    // 인풋창에 글 입력시 업데이트
    setfoodSort(e.target.value);
  }

  const onChangeFoodInfo = (e) => {
    // 인풋창에 글 입력시 업데이트
    setFoodInfo(e.target.value);
  }

  const onChangeTip = (e) => {
    // 인풋창에 글 입력시 업데이트
    setTip(e.target.value);
  }

  const onChangeSpicy = (e) => {
    // 인풋창에 글 입력시 업데이트
    setSpicy(e.target.value);
  }

  const handleChange = (value) => {
    setSpicy(value);
  }

  const onSubmitForm = () => {
    // submit 버튼 클릭 시 서버로 해당 값 전송
    const foodData = { foodName: foodName, foodInfo: foodInfo, tip: tip, spicy: spicy, sort: foodSort, image: Image };
    axios.post('http://3.34.193.46:5000/product/upload', foodData)
      .then((res) => {
        if(res.data.success) {
          props.history.push('/');
        } else {
          alert('무언가 문제가 있습니다.')
        }
      });
  }
  console.log(props,'=====');
  return (
    <div>
      <Row gutter={24}>
        <Col lg={8} xs={24}>
        </Col>
        <Col lg={10} xs={24}>
          <div >
            <div style={{ position: "relative" , right: "100px" }}>음식 정보 업로드</div>
            <br />
  
            <Form onFinish={onSubmitForm}>
              {/* 자식컴포넌트 */}
              <FileUpload updateImages={updateImages} />
              <br />
              <br />
              <div>음식이름</div>
              <Input style={{ width: "200px" }} value={foodName} onChange={onChangeName}></Input>
              <br />
              <br />
              <div>분류</div>
              <Input style={{ width: "200px" }} value={foodSort} onChange={onChangeFoodSort}></Input>
              <br />
              <br />
              <div>음식정보</div>
              <Input.TextArea value={foodInfo} onChange={onChangeFoodInfo}></Input.TextArea>
              <br />
              <br />
              <div>꿀팁</div>
              <Input.TextArea value={tip} onChange={onChangeTip}></Input.TextArea>
              <br />
              <br />
              <div>맵기정도</div>
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={spicy} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
              <br />
              <br />
              <br />
              <Button style={{ marginBottom: "50px"}}htmlType="submit" type="primary">완료</Button>

            </Form>
          </div>
        </Col>
        <Col lg={8} xs={24}>
        </Col>
      </Row>
    </div>
  )
}


export default withRouter(Admin);