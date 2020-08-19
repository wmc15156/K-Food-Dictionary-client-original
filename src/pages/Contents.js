import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './ContentsPage/video_list'
import VideoPlayer from './ContentsPage/video-player';
import ContentsInfo from '../pages/ContentsPage/contentsInfo';
const API_KEY = "AIzaSyCVcc2YmHnvG_weP2cqcTwPai5-jxPsQ_U"

class Contents extends Component {
    constructor(props) {

        super(props);

        this.state = {
            videos: [],
            currentVideo: null,
        };
        let lastURL = window.location.href.split('/')
        this.videoSearch(decodeURI(lastURL[4]));
    }


    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, (data) => {

            this.setState({
                videos: data,
                currentVideo: data[0]
            });
        });

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
                <button onClick={() => favoritPost(lastFoodname)} className="favoritBt">찜하기</button>
                <VideoList
                    onVideoSelect={userSelected => this.setState({ currentVideo: userSelected })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default Contents;
