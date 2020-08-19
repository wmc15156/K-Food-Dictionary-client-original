import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <div onClick={() => onUserSelected(video)} className="video-list-item">

            <img className="thumbnails" src={imageUrl} />

            <div className="video-list-item-title">{video.snippet.title}</div>
        </div>
    );
};

export default VideoListItem;