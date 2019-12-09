import React, { Component } from "react";
import Link from "next/link";

import AppConfig from "Constants/AppConfig";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="index.html">
                    <a>
                      <img src={AppConfig.appLogo} alt="logo" />
                    </a>
                  </Link>
                </div>
                <ul className="quick-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Vehicles</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="footer-contact-info">
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Office</p>
                      <p className="mb-0">Phone</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Whatsapp</p>
                      <p className="mb-0">Phone</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Email</p>
                      <p className="mb-0">Phone</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Operating Hours</h3>

                <ul className="footer-contact-info">
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Monday - Friday</p>
                      <p className="mb-0">Phone</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Saturday</p>
                      <p className="mb-0">Phone</p>
                    </div>
                  </li>
                  <li>Closed on Sundays and Public Holidays</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Connect with Us</h3>

                <ul className="top-header-nav">
                  <li>
                    <i
                      style={{ padding: "5px" }}
                      className="fab fa-facebook-f"
                    ></i>
                  </li>
                  <li>
                    <i
                      style={{ padding: "5px" }}
                      className="fab fa-instagram"
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <small>
                  Copyright @ 2019 Chan's Car Rental. All Rights Reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
