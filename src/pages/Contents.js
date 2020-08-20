import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './ContentsPage/video_list'
import VideoPlayer from './ContentsPage/video-player';
import ContentsInfo from '../pages/ContentsPage/contentsInfo';
const API_KEY = "AIzaSyDsBplF70B03q3MrF2tghZYnYt5IZcFgCI"
const lastURL = window.location.href
class Contents extends Component {
    constructor(props) {

        super(props);

        this.state = {
            videos: [],
            currentVideo: null,
        };
        let ArrayLastURL = window.location.href.split('/')
        this.videoSearch(decodeURI(ArrayLastURL[4]) + "먹방");
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
        console.log("로그인여부 :", this.props.isLogin)

        const { favoritPost } = this.props;

        let lasturl = window.location.href.split('/')
        let lastFoodnameNum = decodeURI(lasturl[4])
        let lastFoodname = lastFoodnameNum.split(':')
        console.log('음식이름', lastFoodname[0]);
        let foodNum = lastFoodname[1]


        return (
            <div>
                <VideoPlayer video={this.state.currentVideo} />
                <ContentsInfo dish={this.props.dish} foodNum={foodNum} />
                <button onClick={() => favoritPost(lastFoodname[0])} className="favoritBt">찜하기</button>
                <button onClick={() => this.naverShare()}>네이버공유하기</button>
                <VideoList
                    onVideoSelect={userSelected => this.setState({ currentVideo: userSelected })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default Contents;
