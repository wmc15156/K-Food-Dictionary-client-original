/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import Dropzone from 'react-dropzone' // 해당부분 클릭시 사진 업로드 되는 모듈
import { PlusOutlined } from '@ant-design/icons'; // + 아이콘

import axios from 'axios';

function FileUpload(props) {
    // state 관리
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData();
        // 이미지 전송시 헤더값 multipart/fomr-data 이어야함
        const config = {
            header: { 'content-type': 'multipart/fomr-data' }
        }
        formData.append("file", files[0])

        axios.post('/product/saveImage', formData, config)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    console.log(Images);
                    // 성공적으로 응답이 왔으면 기존이미지에 추가
                    setImages([...Images, response.data.fileName])
                    props.updateImages([...Images, response.data.fileName]) // // 부모 컴포넌트 Image state업데이트

                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }
    // 해당이미지 클릭시 이미지 지워주는 메소드
    const deleteHandler = (image) => {
        const currentImg = Images.indexOf(image); // 해당이미지가 어디에 있는지 추출
        console.log(currentImg)
        let newImages = [...Images] // 복사
        newImages.splice(currentImg, 1) // 해당하는 것만 잘라내기
        setImages(newImages)// 스테이트 업데이트
        props.updateImages(newImages) // 부모 컴포넌트 Image state업데이트
    }

    return (
        //Dropzone 부분은 npm 공식문서에 있는 부분 복사 / 붙여넣기 하였습니다.
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            width: 300, height: 240, border: '1px solid lightgray',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        <PlusOutlined type="plus" style={{ fontSize: '3rem' }} />
                    </div>
                )}
            </Dropzone>
            <div style={{ display: "flex", width: '350px', height: '240px', overflowX: 'scroll', position: 'relative', left: '10px' }}>
                {/* 현재 Image 스테이트에 있는 값들을 img태그를 이용하여 구현 // src에 있는부분은 서버주소이어야함 */}
                {Images.map((image, index) => (
                    <div key={image + index} onClick={() => deleteHandler(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                            src={`${image}`} alt="profile"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FileUpload