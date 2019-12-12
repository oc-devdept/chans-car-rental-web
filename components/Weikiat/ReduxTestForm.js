import React from "react";
import { Field, reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const renderFormControl = ({ input, meta: { touched, error }, ...props }) => (
  <Form.Control {...props} {...input} isInvalid={touched && error} />
);

let ReduxTestForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Field name="name" component={renderFormControl} type="text" />
        <Form.Control.Feedback type="invalid">
          {validate.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Field name="email" component={renderFormControl} type="email" />
        <Form.Control.Feedback type="invalid">
          {validate.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupMessage">
        <Form.Label>Message</Form.Label>
        <Field
          name="message"
          component={renderFormControl}
          as="textarea"
          rows="10"
        />
        <Form.Control.Feedback type="invalid">
          {validate.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

ReduxTestForm = reduxForm({
  // a unique name for the form
  form: "contact",
  validate
})(ReduxTestForm);

export default ReduxTestForm;
