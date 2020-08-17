import React from "react";

const VideoPlayer = ({ video }) =>
    !video ? (
        <div>Working on it, please wait</div>
    ) : (
            <div>
                <div>
                    <iframe
                        className="video-player"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );

export default VideoPlayer;
