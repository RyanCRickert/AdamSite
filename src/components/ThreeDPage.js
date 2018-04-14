import React from "react";
import { PhotoSwipeGallery } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import Header from "../components/Header";
import threeD from "../images/3d";

export default class ThreeDPage extends React.Component {
  constructor(props) {
    super(props);

    this.list = threeD;
  }

  getThumbnailContent = (item) => {
    return (
      <img src={item.src} height={124} />
    );
  }
  

  render() {
    return (
      <div className="content-container">
        <div className="header">
          <Header />
        </div>
        <div className="image__list">
          <PhotoSwipeGallery items={this.list} thumbnailContent={this.getThumbnailContent} options={{history: false}}/>
        </div>
      </div>
    )
  }
}