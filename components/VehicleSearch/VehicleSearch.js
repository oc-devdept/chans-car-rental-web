import React from "react"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import InputGroup from 'react-bootstrap/InputGroup'

function VehicleSearch() {
	// change to class component to store form state
	// include form validation
	// restrict time input based on date
	
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
				{/* possible to use one component for both pick up and drop off? */}
				<Col md={6} lg={true}>
					<Form.Group controlId="pick-up">
						<Form.Label>Pick-up Date:</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text 
									id="pick-up date"
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
								aria-label="pick-up date"
								aria-describedby="pick-up date"
								style={{
									padding: 0
								}}
							/>
							<Form.Control as="select">
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</Form.Control>
						</InputGroup>
					</Form.Group>
				</Col>
				<Col md={6} lg={true}>
					<Form.Group controlId="drop-off">
						<Form.Label>Drop-off Date:</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text 
									id="drop-off date"
									style={{
										backgroundColor: "#f5f5f5",
										border: "none",
										borderRadius: 0,
									}}
								>
									<i className="fas fa-calendar-alt" />
								</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
								type="date"
								aria-label="drop-off date"
								aria-describedby="drop-off date"
								style={{
									padding: 0
								}}
							/>
						</InputGroup>
					</Form.Group>
				</Col>
				<Col lg={2} md={12} className="align-self-end">
					<Form.Group>
						<Button type="submit" style={{fontSize: 16}}>Search</Button>
					</Form.Group>
				</Col>
			</Form.Row>
		</Form>
	)
}

export default VehicleSearch