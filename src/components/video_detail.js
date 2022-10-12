import Reach from 'react'

const VideoDetail = (props) => {
    const videoID = video.id.videoId;
    video = props.video
    if (!video) {
        return <div>Loading...</div>
    }
    // const url = 'https://www.yotube.com/embed/' + videoId;
    const url = `https://www.yotube.com/embed/${videoId}`

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>

            </div>
        </div>
    )
}