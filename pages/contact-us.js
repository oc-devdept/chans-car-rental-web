import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb";

// Components
import ContactForm from "Components/Contact/ContactForm";
import ContactDetail from "Components/Contact/ContactDetail";

// const contactDetail = [{ icon: "", text: "", href: "" }];

class ContactUs extends Component {
  render() {
    return (
      <Default>
        <div className="container">
          <h1>Contact Us</h1>
          <Breadcrumb title="Contact Us" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/* <ContactInfo /> */}

              <div className="contact-info">
                {/* Need to figure out how to put newline in this text without dangerouslySetInnerHTML */}
                {/* {contactDetail.map((detail, key) => (
                  <ContactDetail key={key} icon={detail.icon} />
                ))} */}
                <ContactDetail
                  icon="fas fa-map-marker-alt"
                  text="363 Sembawang Road
				Goodlink Park
				Singapore 758379"
                />
                <ContactDetail
                  icon="fas fa-phone"
                  text="+65 6753 2536"
                  href="tel: +65 6753 2536"
                />
                <ContactDetail
                  icon="fab fa-whatsapp"
                  text="+65 9772 5363"
                  href="https://api.whatsapp.com/send?phone=6597725363"
                />
                <ContactDetail
                  icon="far fa-envelope"
                  text="sales@chans.com.sg"
                  href="mailto: sales@chans.com.sg"
                />
                <ContactDetail
                  icon="fab fa-facebook-f"
                  text="/Chans-Car-Rental"
                  href="#"
                />
                <ContactDetail
                  icon="fab fa-instagram"
                  text="chanscarrental"
                  href="#"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2913254507557!2d103.825382490687!3d1.42601282930758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1366bf38b86d%3A0xfa6e06eeb142f26d!2sChan&#39;s%20Car%20Rental!5e0!3m2!1sen!2ssg!4v1576046456146!5m2!1sen!2ssg"
                width="500"
                height="400"
                frameBorder="0"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h2>Operating Hours</h2>
              <div className="d-flex">
                <i
                  className="far fa-clock"
                  style={{
                    fontSize: 16,
                    width: 30,
                    textAlign: "center",
                    paddingTop: 10
                  }}
                />
                <p>
                  Monday to Friday:
                  <br />
                  8.30 am to 5.00 pm
                  <br />
                  <br />
                  Saturday:
                  <br />
                  8.30 am to 12.00pm
                  <br />
                  <br />
                  {"Closed on Sundays & Public Holidays"}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h2>Leave us a message or feedback!</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Default>
    );
  }
}

export default ContactUs;
