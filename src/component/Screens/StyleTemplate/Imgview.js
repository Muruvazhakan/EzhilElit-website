import React from 'react'
import ImgsViewer from 'react-images-viewer'
 
export default class Imgview extends React.Component {
  render() {
    return (
      <ImgsViewer
      imgs={[
        { src: "https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/1.jpg" },
        { src: "https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/2.jpg" },
      ]}
        // currImg={this.state.currImg}
        // isOpen={this.state.viewerIsOpen}
        // onClickPrev={this.gotoPrevious}
        // onClickNext={this.gotoNext}
        // onClose={this.closeViewer}
      />
    )
  }
}