import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onUserSelected={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <div className="video-list">
            {videoItems}
        </div>
    );
};

export default VideoList;