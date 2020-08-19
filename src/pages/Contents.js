import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './ContentsPage/video_list'
import VideoPlayer from './ContentsPage/video-player';
const API_KEY = "YOUR_API_KEY"

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
        return (
            <div>
                <div>
                    <VideoPlayer video={this.state.currentVideo} />
                </div>

                <div>음식정보</div>

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
