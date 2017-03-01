import React, {Component} from 'react';

class VideoDetail extends Component{
  constructor(props){
    super(props);

  }

  render(){
    if(!this.props.video){
        return <div>loading...</div>
    }

    const video = this.props.video;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <h3>{ video.snippet.title}</h3>
          <p className="small">{ video.snippet.description}</p>
        </div>
      </div>
    )
  }
};

export default VideoDetail
