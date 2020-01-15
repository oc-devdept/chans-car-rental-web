import React from "react"

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function FaqInfo() {
    const faqDetails = [
        {
            id: 0,
            question: "What are the driver requirements?",
            answer: `Drivers must be between 24 to 70 years old and \
            hold a valid Singapore Class 3 driving licence or \
            Traffic Police approved international licence, with a \
            minimum 2 years' driving experience.`
        },
        {
            id: 1,
            question: "What does the rental rate include?",
            answer: `Rate includes self-drive insurance for use in \
            Singapore, emergency services and maintenance over the \
            period of hire. Limited insurance liabilities: Own \
            Damage: $1,500 and Third Party: $2,000. Personal usage \
            costs like fuel, parking & ERP charges are not included.`
        },
        {
            id: 2,
            question: `Are the published rates same for weekends and \
            throughout the year?`,
            answer: `Our offer rates are the same on weekends but \
            will vary based on seasonal demand. We offer packaged \
            rates for festive seasons 2 months prior to peak periods \
            of Hari Raya, CNY and Christmas/New Year.`
        },
        {
            id: 3,
            question: `What are your office hours and the minimum hire \
            period?`,
            answer: `Vehicles can be collected at our office during \
            our operating hours. Rental is based on 24-hour periods \
            with minimum 1-day hire for weekdays & 2-day hire for \
            weekend, exluding public holidays. For advance bookings, \
            the minimum period is 3-day or festive packages. Please \
            call to place your bookings.`
        },
        {
            id: 4,
            question: `Can I use your car for re-hire and transportation \
            network services like "Uber"?`,
            answer: `Currently, our cars cannot be used for re-hire or \
            transport sharing services due to insurance companies' \
            restrictions.`
        },
        {
            id: 5,
            question: "What are the modes of payment?",
            answer: `Due to credit controls, payment must be made by \
            credit cards only (VISA or Mastercard). We regret that we \
            do not accept debit cards and limited credit cards (e.g. \
            $500 limit cards).`
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