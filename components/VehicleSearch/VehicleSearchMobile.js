import React, { Component } from "react"

import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

// date picker docs - https://react-day-picker.js.org/docs/getting-started
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// pending: update from chans on any booking restrictions
// todo: validating date/time input
class VehicleSearchMobile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSaturdayPickUp: false,
			isSaturdayDropoff: false,
		}
	}
	
	handleDayChange = (date, modifiers, input) => {
		const { id } = input.input
		const dayOfTheWeek = new Date(date).getDay()
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
				
	listOfTimings = (isSaturday) => {
		const saturdayTimings = ["08:00", "09:00", "10:00"]
		
		const restOfTheWeekTimings = [
			"09:00", "10:00", "11:00", "12:00", "13:00", 
			"14:00", "15:00", "16:00", "17:00"
		]

		return isSaturday ? 
			saturdayTimings.map(( item, id ) => <option key={id}>{item}</option>) :
			restOfTheWeekTimings.map(( item, id ) => <option key={id}>{item}</option>)		
	}
		
	publicHolidays() {
		const year = 2020
		// Jan = 0, Feb = 1, ... Dec = 11
		// https://www.mom.gov.sg/newsroom/press-releases/2019/0408-public-holidays-for-2020
		const dates = [
			{	month: 0,	day: 1 },
			{	month: 0,	day: 25 },
			{	month: 0,	day: 26 },
			{	month: 0,	day: 27 },
			{	month: 3,	day: 10 },
			{	month: 4,	day: 1 },
			{	month: 4,	day: 7	},
			{	month: 4,	day: 24	},
			{	month: 4,	day: 25	},
			{	month: 6,	day: 31 },
			{	month: 7,	day: 9 },
			{	month: 7,	day: 10 },
			{	month: 10, day: 14	},
			{	month: 11, day: 25 },
		]
			
		return (dates.map( date => (
				new Date(year, date.month, date.day)
			)))
	}

	onFormSubmit = (event) => {
		event.preventDefault()
		window.location = "/search"
	}
			
	render() {
		const inputField = [
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

		return(
			<div className="search-mobile">



				<Form className="my-3" onSubmit={this.onFormSubmit}>
					<Form.Row>
						<Col md={12} lg={true}>
							<Form.Group controlId="location">
								<Form.Label>Pick-up / Drop-off Location:</Form.Label>
								<Form.Control 
									type="text" 
									placeholder="363 Sembawang Road Goodlink Park"
									disabled={true}
									style={{
										backgroundColor: "#d8d8d8"
									}}
								/>
							</Form.Group>
						</Col>
						{ inputField.map(( item, id ) => (
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
										{/* 
											KIV: probably need to track dates in state to manipulate
											pickup/dropoff disabled dates differently
										*/}
										<DayPickerInput 
											dayPickerProps={{
												disabledDays: [
													{daysOfWeek: [0]},
													{before: new Date()},
													{after: new Date(new Date().setMonth(new Date().getMonth()+1))},
													...this.publicHolidays()
												]
											}}
											inputProps={{
												id: item.controlId,
												autoComplete: "off",
												style: {
													height: "100%",
													width: "100%",
													padding: 0,
													border: "none",
													borderLeft: "1px solid #c5c5c5",
													borderRight: "1px solid #c5c5c5",
													backgroundColor: "#f5f5f5",
													textAlignLast: "center",
												}
											}}
											style={{
												width: "50%",
											}}
											onDayChange={this.handleDayChange}
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
			</div>
		)
	}
}

export default VehicleSearchMobile