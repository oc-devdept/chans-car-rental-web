import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "../components/Common/Breadcrumb";
// Components
import EnquiryForm from "../components/Weikiat/EnquiryForm"
import ContactInfo from "../components/Weikiat/ContactInfo"
import FaqInfo from "../components/Weikiat/FaqInfo"
import ReduxTestForm from "../components/Weikiat/ReduxTestForm"

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
							{/* {<EnquiryForm />} */}
							<ReduxTestForm />
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