import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";
import { Player } from "video-react";
class VideosData extends Component {
  constructor() {
    super();
    this.state = {
      video: []
    };
  }
  componentDidMount() {
    fetch("/videos")
      .then(res => res.json())
      .then(video =>
        this.setState({ video }, () => console.log("playlist fetched", video))
      );
  }
  render() {
    return (
      <div>
        <Grid doubling columns={5}>
          {this.state.video.map(video => (
            <Grid.Column key={video.id}>{video.video_url}</Grid.Column>
          ))}
        </Grid>
        {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
      </div>
    );
  }
}

export default VideosData;
