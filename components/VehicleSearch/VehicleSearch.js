import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import InputGroup from 'react-bootstrap/InputGroup'

// todo: form validation
// todo: block out all sundays/PHs
class VehicleSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSaturdayPickUp: false,
			isSaturdayDropoff: false,
		}

		this.handleChange = this.handleChange.bind(this)
		this.listOfTimings = this.listOfTimings.bind(this)
	}

	handleChange(event) {
		const { id, value } = event.target
		const dayOfTheWeek = new Date(value).getDay()
		const isSaturday = (dayOfTheWeek === 6) ? true : false
		
		switch(id) {
			case "pick-up":
				this.setState({
					isSaturdayPickUp: isSaturday
				})
				break
			case "drop-off":
				this.setState({
					isSaturdayDropoff: isSaturday
				})
				break
			default:
				break
		}
	}

	inputField = [
		{
			controlId: "pick-up",
			formLabel: "Pick-up Date:",
			timeId: "pick-up-time"
		},
		{
			controlId: "drop-off",
			formLabel: "Drop-off Date:",
			timeId: "drop-off-time"
		}
	]

	listOfTimings(isSaturday) {
		const saturdayTimings = ["08:00", "09:00", "10:00"]

		const restOfTheWeekTimings = [
			"09:00", "10:00", "11:00", "12:00", "13:00", 
			"14:00", "15:00", "16:00", "17:00"
		]

		return isSaturday ? 
			saturdayTimings.map(( item, id ) => <option key={id}>{item}</option>) :
			restOfTheWeekTimings.map(( item, id ) => <option key={id}>{item}</option>)		
	}
	
	render() {
		return(
			<Form className="my-3">
				<Form.Row>
					<Col md={12} lg={true}>
						<Form.Group controlId="location">
							<Form.Label>Pick-up / Drop-off Location:</Form.Label>
							<Form.Control 
								type="text" 
								placeholder="363 Sembawang Road Goodlink Park"
								disabled={true}
							/>
						</Form.Group>
					</Col>
					{this.inputField.map(( item, id ) => (
						<Col md={6} lg={true} key={id}>
							<Form.Group controlId={item.controlId}>
								<Form.Label>{item.formLabel}</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text 
											style={{
												backgroundColor: "#f5f5f5",
												border: "none",
												borderRadius: 0
											}}
										>
											<i className="fas fa-calendar-alt" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control 
										type="date"
										style={{
											padding: "0",
											width: "30%",
											borderRight: "2px solid #c5c5c5"
										}}
										onChange={this.handleChange}
									/>
									<Form.Control 
										as="select"
										id={item.timeId}
										style={{
											textAlignLast: "center",
										}}
									>	
										{/* item.timeId is either pick-up-time or drop-off-time */}
										{item.timeId === "pick-up-time" ? 
											this.listOfTimings(this.state.isSaturdayPickUp) : 
											this.listOfTimings(this.state.isSaturdayDropoff)
										}
									</Form.Control>
								</InputGroup>
							</Form.Group>
						</Col>
					))}
					<Col lg={2} md={12} className="align-self-end">
						<Form.Group>
							<Button 
								type="submit" 
								style={{
									fontSize: 16
								}}
							>
								Search
							</Button>
						</Form.Group>
					</Col>
				</Form.Row>
			</Form>
		)
	}
}

export default VehicleSearch