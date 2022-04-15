import React from "react";
import { Link } from "gatsby";
import logo from "../img/NUYL-logo.svg";

const NavbarEn = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-head">
          <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">Home</a>
                  <a className="navbar-item">Blog Posts</a>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-rss-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }
};

export default NavbarEn;
