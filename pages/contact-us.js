import React, { Component } from "react"
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb";
import ContactInfo from "Components/ContactUs/ContactInfo";
import EnquiryForm from "Components/EnquiryForm/EnquiryForm";

class ContactUs extends Component {
    render() {
        return(
            <Default>
                <div className="container">
					<h1>Contact Us</h1>
					<Breadcrumb title="Contact Us"/>
				</div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2913254507557!2d103.825382490687!3d1.42601282930758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1366bf38b86d%3A0xfa6e06eeb142f26d!2sChan&#39;s%20Car%20Rental!5e0!3m2!1sen!2ssg!4v1576046456146!5m2!1sen!2ssg" 
                                width="500" 
                                height="400" 
                                frameBorder="0"
                                allowFullscreen=""
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h2>Operating Hours</h2>
                            <div style={{display: "flex"}}>
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
                                    Monday to Friday:<br/>
                                    8.30 am to 5.00 pm<br/>
                                    <br/>
                                    Saturday:<br/>
                                    8.30 am to 12.00pm<br/>
                                    <br/>
                                    {"Closed on Sundays & Public Holidays"}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h2>Leave us a message or feedback!</h2>
                            <EnquiryForm />                            
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

export default ContactUs