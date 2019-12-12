import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb";
// Components
import EnquiryForm from "Components/EnquiryForm/EnquiryForm"
import ContactInfo from "Components/ContactUs/ContactInfo"
import FaqInfo from "Components/Faq/FaqInfo"

class Faq extends Component {
	render() {
		return(
      		<Default>
				<div className="container">
					<h1>Frequently Asked Questions</h1>
					<Breadcrumb title="FAQs"/>
				</div>
				<div className="container">
          			<FaqInfo />
        		</div>
				<div className="container">
					<h3>Can't find your answer?</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<h2>Leave us a message or feedback!</h2>
							<EnquiryForm />
						</div>
						<div className="col-lg-6 col-md-12">
							<h2>Get in touch!</h2>
							<ContactInfo />
						</div>
					</div>
				</div>
      		</Default>
    	)
  	}
}

export default Faq;