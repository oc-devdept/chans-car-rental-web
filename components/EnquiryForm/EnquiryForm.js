import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EnquiryForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formGroupName: "",
			formGroupEmail: "",
			formGroupMessage: "",
			errors: {
				nameError: "",
				emailError: "",
				messageError: ""
			}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const { id, value } = event.target
		const validEmailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		let errors = this.state.errors
		
		switch(id) {
			case "formGroupName": 
				errors.nameError = (value.length < 1) 
					? "Required" : ""
				break
			case "formGroupEmail": 
				if (value.length < 1) {
					errors.emailError = "Requried"
				} else if (!validEmailRegex.test(value)) {
					errors.emailError = "Please enter a valid email address"
				} else {
					errors.emailError = ""
				}
				break
			case "formGroupMessage": 
				errors.messageError = (value.length < 1) 
					? "Required" : ""
				break
			default:
				break
		}

		this.setState({
			[id]: event.target.value,
			errors: errors
		})
	}

	render() {
		return(
			<div className="enquiry-form">
				<Form>
					<Form.Group controlId="formGroupName">
						<Form.Label>Name</Form.Label>
						<Form.Control 
							type="text" 
							onChange={this.handleChange}
							isInvalid={!!this.state.errors.nameError}
						/>
						<Form.Control.Feedback type="invalid">
							{this.state.errors.nameError}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formGroupEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="email" 
							onChange={this.handleChange} 
							isInvalid={!!this.state.errors.emailError}
						/>
						<Form.Control.Feedback type="invalid">
							{this.state.errors.emailError}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formGroupMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control 
							as="textarea" 
							rows="10" 
							onChange={this.handleChange} 
							isInvalid={!!this.state.errors.messageError}
						/>
						<Form.Control.Feedback type="invalid">
							{this.state.errors.messageError}
						</Form.Control.Feedback>
					</Form.Group>
					<Button 
						type="submit"
						variant="primary"
						// style={{
						// 	backgroundColor: "#B72C2E",
						// 	borderColor: "#B72C2E"
						// }}
					>
						Send
					</Button>
				</Form>
			</div>
		)
	}
}

export default EnquiryForm;