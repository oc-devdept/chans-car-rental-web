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
                <h3>Chan's Car Rental</h3>
                <ul className="quick-links">
                  <li>
                    <a href="/vehicles/cars">Cars</a>
                  </li>
                  <li>
                    <a href="/vehicles/commercial">Commercial</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
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
                      <p className="mb-0">Phone</p>
                      <p className="mb-0">
                        <span style={{color:""}}>
                          <a href="tel: +65 6753 2536"><span style={{color:"#b72c2e"}}>+65 6753 2536</span></a>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Whatsapp</p>
                      <p className="mb-0">
                        <a href="https://api.whatsapp.com/send?phone=6597725363"><span style={{color:"#b72c2e"}}>+65 9772 5363</span></a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Email</p>
                      <p className="mb-0">
                        <a href="mailto: sales@chans.com.sg">
                          <span style={{color:"#b72c2e"}}>sales@chans.com.sg</span>
                        </a>
                      </p>
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
                      <p className="mb-0">Mon - Fri</p>
                      <p className="mb-0">
                        <span style={{color:"#b72c2e"}}>8.30 am to 5.00pm</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Sat</p>
                      <span style={{color:"#b72c2e"}}>8.30 am to 12.00pm</span>
                    </div>
                  </li>
                  <li>Closed on Sun and Public Holidays</li>
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
