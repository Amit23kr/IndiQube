import React, { Component } from "react";

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Grid,
  Cell
} from "react-mdl";
import VideosData from "./VideosData";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      playlist: []
    };
  }

  componentDidMount() {
    fetch("/videos")
      .then(res => res.json())
      .then(playlist =>
        this.setState({ playlist }, () =>
          console.log("playlist fetched", playlist)
        )
      );
  }
  render() {
    return (
      <div>
        {/* Always shows a header, even in smaller screens. */}
        <div style={{ height: "650px", position: "relative" }}>
          <Layout fixedHeader>
            <Header
              title={
                <span>
                  <span style={{ color: "#ddd" }}>IndiQube</span>
                </span>
              }
            />
            <br />
            <VideosData />
            <br />
            <Drawer title="Playlist" style={{ color: "blue" }}>
              <Navigation>
                {this.state.playlist.map(playlist => (
                  <a key={playlist.id}>{playlist.thumbnail_url}</a>
                ))}
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
      </div>
    );
  }
}

export default Navbar;
