import React from "react";
import VideoPlayer from "./ContentsPageList/VideoPlayer";
import VideoList from "./ContentsPageList/VideoList";
import { searchYouTube } from "../pages/ContentsPageList/searchYouTube";
import { YOUTUBE_API_KEY } from "../config/youtube";

class Contents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            currentVideo: null
        };
    }

    componentDidMount() {
        this.getYouTubeVideos("먹방");
    }

    getYouTubeVideos(query) {
        var options = {
            key: YOUTUBE_API_KEY,
            query: query
        };

        searchYouTube(options, videos =>
            this.setState({
                videos: videos,
                currentVideo: videos[0]
            })
        );
    }

    handleVideoListClick(video) {
        this.setState({
            currentVideo: video
        });
    }

    render() {
        return (
            <div>
                <div>
                    <VideoPlayer video={this.state.currentVideo} />
                </div>

                <div className="favoriteBox">
                    음식 정보
                </div>

                <div>
                    <VideoList
                        handleVideoListClick={this.handleVideoListClick.bind(
                            this
                        )}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        )
    }
}
export default Contents;
