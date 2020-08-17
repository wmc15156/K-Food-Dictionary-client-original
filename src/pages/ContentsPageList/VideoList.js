import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = ({ videos, handleVideoListClick }) => (
    <div className="video-list media">
        {videos.map(video => (
            <VideoListEntry
                key={video.etag}
                video={video}
                handleVideoListClick={handleVideoListClick}
            />
        ))}
    </div>
);

export default VideoList;
