import React from "react"

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function FaqInfo() {
    const faqDetails = [
        {
            id: 0,
            question: "What are the driver requirements?",
            answer: `Drivers must be between 24 to 70 years old and hold \
            a valid Singapore Class 3 driving license or Traffic Police \
            approved international license, with minimum 2 years’ driving experience. `
        },
        {
            id: 1,
            question: "What does the rental rate include?",
            answer: `Rate includes self-drive insurance for use in Singapore, \
            emergency services and maintenance over the period of hire. Limited \
            insurance liabilities: Own damage: $1500 and Third party: $2000. Usage \
            costs like fuel, parking, cashcard & ERP charges are not included.`
        },
        {
            id: 2,
            question: `Are the published rates same for weekends and \
            throughout the year?`,
            answer: `Our rates are the same for weekend but will vary based on seasonal demands. \
            You may call us for our weekend package. We offer packaged rates for festive seasons \
            1 Month prior to peak periods of HARI RAYA, CHINESE NEW YEAR, DEEPAVALI, CHRISTMAS & NEW YEAR. `
        },
        {
            id: 3,
            question: `What are your office hours and the minimum hire \
            period?`,
            answer: `Vehicles can be collected at our office during our operating hours. 
            Rental is based on 24-hour periods with minimum 1 day hire for weekdays & 2 day hire for weekend.
            For advance bookings, the minimum period is at least 3 days or according to our festive packages.
            (Mon-Fri: 830am to 5.00pm, Sat: 8.30am to 12nn, Sunday/Public Holiday: Closed)`
        },
        {
            id: 4,
            question: `Can I drive the vehicle into Malaysia?`,
            answer: `An insurance surcharge of $30 per day is levied on the selected range \
            of saloon cars and MPVs. Limited mileage and area of coverage apply.`
        },
        {
            id: 5,
            question: `Can I use your car for re-hire and transportation \
            network services like "Uber"?`,
            answer: `Currently, our cars cannot be used for re-hire or GRAB due to insurance restrictions.`
        },
        {
            id: 6,
            question: `What happends if I cancel my advance booking?`,
            answer: `There will be no refund but we can postpone your booking up to 2 \
            months starting from your cancellation date.`
        },
        {
            id: 7,
            question: `Do you provide childseat/booster?`,
            answer: `Available on request.
            (Require by Singapore Traffic Police - Anyone below the height of 1.35M: Booster seat
            Age 6 months to 3 years: Child Seat)`
        },
        {
            id: 8,
            question: "What are the modes of payment?",
            answer: `Payment must be made by Credit card and Amex only. We do not accept debit cards.`
        },
    ]

    return(   
        <div className="faq-info py-3">
            <Accordion defaultActiveKey="0">
                {faqDetails.map( item => (
                    <Card key={item.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            {item.question}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.id}>
                            <Card.Body>
                                {item.answer}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    )
}

export default FaqInfo