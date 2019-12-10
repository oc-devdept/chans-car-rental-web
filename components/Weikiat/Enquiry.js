import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Enquiry(props){
	return(
		<div class="enquiry-form">
			<Form>
				<Form.Group controlId="formGroupName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" />
				</Form.Group>
				<Form.Group controlId="formGroupMessage">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows="10" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</div>
	)
}

export default Enquiry;