import React, { Component } from 'react';
import axios from 'axios';

import YTSearch from 'youtube-api-search';
import VideoList from './ContentsPage/video_list'
import VideoPlayer from './ContentsPage/video-player';
import ContentsInfo from '../pages/ContentsPage/contentsInfo';
const API_KEY = "AIzaSyCW3NUCA-1OVQ_fN95C0_rJxyXHGoP_EDE";
const lastURL = window.location.href
class Contents extends Component {
    constructor(props) {
       
        super(props);

        this.state = {
            videos: [],
            currentVideo: null,
        };
        let lastURL = window.location.href.split('/')
        this.videoSearch(decodeURI(lastURL[4]) + "먹방");
    }

    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, (data) => {

            this.setState({
                videos: data,
                currentVideo: data[0]
            });
        });
    }

    naverShare() {
        var url = encodeURI(encodeURIComponent(window.location.href));
        var title = encodeURI(lastURL[4]);
        var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
        document.location = shareURL;
    }

    render() {
      console.log('Contents',this.props);
        console.log("로그인여부 :", this.props.isLogin)

        const { favoritPost } = this.props;
        let lasturl = window.location.href.split('/')
        let lastFoodname = decodeURI(lasturl[4]) // 213123123/식혜
        const { findFoodIndex } = this.props;

        return (

            <div>
                <VideoPlayer video={this.state.currentVideo} />
                <ContentsInfo dish={this.props.dish} lastFoodname={lastFoodname} findFoodIndex={findFoodIndex} />
                <button onClick={() => favoritPost(lastFoodname)} className="favoritBt">찜하기</button>
                <button onClick={() => this.naverShare()}>네이버공유하기</button>
                <VideoList
                    onVideoSelect={userSelected => this.setState({ currentVideo: userSelected })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default Contents;
