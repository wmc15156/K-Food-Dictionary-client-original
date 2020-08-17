import React from "react";

const VideoListEntry = ({ video, handleVideoListClick }) => (
    <div className="video-list-entry">
        <img
            width="200px"
            src={video.snippet.thumbnails.default.url}
            alt=""
        />

        <div className="video-list-entry-title"
            onClick={() => handleVideoListClick(video)}
        >
            {video.snippet.title}
        </div>
    </div>
);
export default VideoListEntry;
