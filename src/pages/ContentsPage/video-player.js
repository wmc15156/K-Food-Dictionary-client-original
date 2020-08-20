import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-player-box">
            <iframe title="먹방영상" className="video-player" src={url} allowFullScreen></iframe>
        </div>
    );
};

export default VideoDetail;