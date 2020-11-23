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
    return (
      <div className="navbar-area">
        <div id="navbar" className="comero-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={AppConfig.appLogo} alt="logo" height="60%" width="60%"/>
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
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fas fa-bars" style={{color: "#ffffff", fontSize: 24}}></i>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item p-relative">
                    <Link href="#">
                      <a className="nav-link active">
                        Our Vehicles <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/vehicles/cars">
                          <a className="nav-link active">Cars</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/vehicles/commercial">
                          <a className="nav-link active">Commercial</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="/login">
                      <a className="nav-link active">Sign In</a>
                    </Link>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="/contact-us">
                      <a className="nav-link active">Contact Us</a>
                    </Link>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="/faq">
                      <a className="nav-link active">Faqs</a>
                    </Link>
                  </li>
                  <li className="nav-item p-relative">
                    <Link href="/news-article">
                      <a className="nav-link active">News</a>
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
