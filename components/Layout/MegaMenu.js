import React, { Component } from "react";
import Link from "next/link";

import AppConfig from "Constants/AppConfig";

class MegaMenu extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { products } = this.props;
    return (
      <div className="navbar-area">
        <div id="navbar" className="comero-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={AppConfig.appLogo} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link active">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link active">
                        Rental <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/">
                          <a className="nav-link active">Home One</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link active">FAQs</a>
                    </Link>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link active">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenu;
