import React, { useState, useEffect, useReducer } from "React";
import Default from "Components/Layout/PageTemplates/Default";
import { Card, Form } from "react-bootstrap";

const Checkout = props => {
  // Local reducer to manage controlled inputs
  const initialState = {
    givenName: "",
    surname: "",
    email: "",
    contactNumber: ""
  };

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { givenName, surname, email, contactNumber } = state;

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({ field: name, value: value });
  };

  // Array of input fields to render
  const inputFields = [
    {
      label: "Given Name",
      controlId: "given-name",
      valueName: "givenName"
    },
    {
      label: "Surname",
      controlId: "surname",
      valueName: "surname"
    },
    {
      label: "Email",
      controlId: "email",
      valueName: "email",
      type: "email"
    },
    {
      label: "Contact Number",
      controlId: "contact-number",
      valueName: "contactNumber",
      type: "tel",
      pattern: ""
    }
  ];

  return (
    <Default>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Text>Driver Details</Form.Text>
                  <Form.Text>
                    <span style={{ color: "red" }}>*</span> Required Fields
                  </Form.Text>
                  {inputFields.map((item, key) => (
                    <Form.Group controlId={item.controlId} key={key}>
                      <Form.Label>
                        {item.label} <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type={item.type}
                        value={item.valueName}
                        onChange={onChange}
                      />
                    </Form.Group>
                  ))}
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-5">sidebar component</div>
        </div>
      </div>
    </Default>
  );
};

export default Checkout;
