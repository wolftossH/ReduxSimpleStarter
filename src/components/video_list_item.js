import React from 'react';

// We can put 'video' object instead of props

const VideoListItem = (props,onVideoSelect) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnail.default.url
    // return <li>Video</li>;
    return (
        <li onClick={()=>onVideoSelect(video)}className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src = {imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;