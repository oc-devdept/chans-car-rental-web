import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Actions
// Redux Action to send form

class ContactForm extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      message: ""
    }
  };

  validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  handleSubmit() {
    console.log("submit");
    // call action to submit form
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" />
          <Form.Control.Feedback type="invalid">
            {this.validate.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" />
          <Form.Control.Feedback type="invalid">
            {this.validate.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formGroupMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" as="textarea" rows="10" />
          <Form.Control.Feedback type="invalid">
            {this.validate.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
