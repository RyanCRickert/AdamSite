import React from "react";
import { PhotoSwipeGallery } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import Header from "../components/Header";
import twoD from "../images/2d";

export default class ThreeDPage extends React.Component {
  constructor(props) {
    super(props);

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
          <PhotoSwipeGallery items={twoD} thumbnailContent={this.getThumbnailContent} options={{history: false}}/>
        </div>
      </div>
    )
  }
}