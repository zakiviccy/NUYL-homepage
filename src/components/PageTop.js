import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

class PageTop extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="pagetop">
        <button className="pagetopbtn" onClick={this.scrollToTop}>
          <FaArrowCircleUp />
          &nbsp;Top
        </button>
      </div>
    );
  }
}

export default PageTop;
