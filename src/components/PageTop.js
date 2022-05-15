import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaArrowCircleUp } from '@react-icons/all-files/fa/FaArrowCircleUp'

class PageTop extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="pagetop">
        <button className="pagetopbtn" onClick={this.scrollToTop}>
          <FaArrowCircleUp />
          &nbsp;Top
        </button>
      </div>
    )
  }
}

export default PageTop
