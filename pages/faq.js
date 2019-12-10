import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "../components/Common/Breadcrumb";
import Enquiry from "../components/Weikiat/Enquiry"
import ContactInfo from "../components/Weikiat/ContactInfo"

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

class Faq extends Component {
	render() {
		return(
      		<Default>
				<div className="container">
					<h1>Frequently Asked Questions</h1>
					<Breadcrumb title="FAQs"/>
				</div>
				<div className="container">
          			<Accordion defaultActiveKey="0">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
        		</div>
				<div className="container">
					<h3>Can't find your answer?</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<h2>Leave us a message or feedback!</h2>
							<Enquiry />
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