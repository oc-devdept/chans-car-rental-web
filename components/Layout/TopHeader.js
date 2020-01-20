import React, { Component } from "react";
import Link from "next/link";

class TopHeader extends Component {
  render() {
    return (
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <ul className="top-header-nav">
                <li>
                  <a href="tel: +65 6753 2536">
                    <i className="fas fa-phone mr-1" />+65 6753 2536
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=6597725363">
                    <i className="fab fa-whatsapp mr-1" />+65 9772 5363
                  </a>
                </li>
                <li>
                  <a href="mailto: sales@chans.com.sg">
                  <i className="far fa-envelope mr-1" />sales@chans.com.sg
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <ul className="top-header-right-nav">
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
    );
  }
}

export default TopHeader;
