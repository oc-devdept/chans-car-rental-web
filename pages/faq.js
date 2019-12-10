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
								What are the driver requirements?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
								{`Drivers must be between 24 to 70 years old and 
								hold a valid Singapore Class 3 driving licence or 
								Traffic Police approved international licence, 
								with a minimum 2 years' driving experience.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								What does the rental rate include?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>
								{`Rate includes self-drive insurance for use in 
								Singapore, emergency services and maintenance 
								over the period of hire. Limited insurance 
								liabilities: Own Damage: $1,500 and Third 
								Party: $2,000. Personal usage costs like fuel, 
								parking & ERP charges are not included.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="2">
								Are the published rates same for weekends 
								and throughout the year?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="2">
								<Card.Body>
								{`Our offer rates are the same on weekends but 
								will vary based on seasonal demand. We offer 
								packaged rates for festive seasons 2 months 
								prior to peak periods of Hari Raya, CNY and 
								Christmas/New Year.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="3">
								What are your office hours and the minimum hire 
								period?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="3">
								<Card.Body>
								{`Vehicles can be collected at our office during 
								our operating hours. Rental is based on 24-hour 
								periods with minimum 1-day hire for weekdays & 
								2-day hire for weekend, exluding public holidays.
								For advance bookings, the minimum period is 3-day 
								or festive packages. Please call to place your 
								bookings.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="4">
								Can I drive the vehicle into Malaysia?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="4">
								<Card.Body>
								{`An insurance surcharge of $30 per day is 
								levied on a selected range of saloon cars and 
								MPVs. Limited mileage and area of coverage will 
								apply.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="5">
								Can I use your car for re-hire and transportation 
								network services like "Uber"?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="5">
								<Card.Body>
								{`Currently, our cars cannot be used for re-hire 
								or transport sharing services due to insurance 
								companies' restrictions.`}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="6">
								What are the modes of payment?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="6">
								<Card.Body>
								{`Due to credit controls, payment must be made 
								by credit cards only (VISA or Mastercard). We 
								regret that we do not accept debit cards and 
								limited credit cards (e.g. $500 limit cards).`}
								</Card.Body>
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