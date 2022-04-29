import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

class PageTopEn extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="pagetop">
        <button className="pagetopbtnEn" onClick={this.scrollToTop}>
          <i class="fas fa-chevron-circle-up"></i>&nbsp;Top
        </button>
      </div>
    )
  }
}

export default PageTopEn
