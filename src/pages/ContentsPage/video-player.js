import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <iframe className="video-player" src={url}></iframe>
        </div>
    );
};

export default VideoDetail;