import { Component } from "react";
import ContentLoader from "react-content-loader";

export default class ImagePlaceholder extends Component {
  render() {
    return (
      <div className="card-image loader">
        <ContentLoader
          height={460}
          speed={2}
          foregroundColor="#f3f3f3"
          backgroundColor="#ecebeb"
          style={{ width: '100%', height: '100%' }}
        >
        <rect x="0" y="0" rx="0" ry="0" width="600" height="460" />
        </ContentLoader>
      </div>
    );
  }
}