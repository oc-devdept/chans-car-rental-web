import React, { Component } from "react";
import Link from "next/link";

class TopHeader extends Component {
  render() {
    return (
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <ul className="top-header-nav">
                <li>
                  <Link href="/">
                    <a>Phone</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Whatsapp</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Email</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6">
              <ul className="top-header-right-nav">
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
