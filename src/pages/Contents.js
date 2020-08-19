import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './ContentsPage/video_list'
import VideoPlayer from './ContentsPage/video-player';

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
        let lastFoodname = decodeURI(lasturl[4])

        return (
            <div>
                <div>
                    <VideoPlayer video={this.state.currentVideo} />
                </div>

                <div>음식정보



                    <button onClick={() => this.naverShare()}>네이버공유하기</button>


                </div>



                <button onClick={() => favoritPost(lastFoodname)} className="favoritBt">찜</button>

                <div>
                    <VideoList
                        onVideoSelect={userSelected => this.setState({ currentVideo: userSelected })}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default Contents;
