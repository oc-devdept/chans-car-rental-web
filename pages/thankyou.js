import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";

class ThankYou extends Component {
  render() {
    return(
      <Default>
        <div className="container mt-3">
          <h1>Message Sent Successful!</h1>
        </div>
        <div className="container mt-3">
            <h3>Thank you for your enquiry with Chans Car! We will contact you shortly with the relevant information requested.</h3>
        </div>
      </Default>
    )
  }
}

export default ThankYou