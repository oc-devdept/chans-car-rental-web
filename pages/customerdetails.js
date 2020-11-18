import React, { useState, useEffect, useReducer } from "react";
import Default from "Components/Layout/PageTemplates/Default";
import { Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { getTheDate, getDateTime, formatPrice } from "Components/Helpers/helpers";
import Footer from "Components/Layout/Footer";
import Breadcrumb from "Components/Common/Breadcrumb";

import {
  getCategories,
  getSearch,
  updateSelectedVehicle,
} from "Ducks/rent/RentActions";

import { updatePrice } from "Ducks/rent/RentActions";

const DriverDetails = ({ RentState, updatePrice }) => {

  console.log("rentstate= ", RentState);

  // useEffect(() => {
  //   if (Object.keys(RentState.SelectedVehicle).length === 0) {
  //     Router.replace("/search-extras");
  //   }
  // });

  useEffect(() => {
    if (Object.keys(RentState.ExtraOptions).length !== 0) {
      updatePrice();
    }
  }, []);

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

  // const onChange = e => {
  //   const { name, value } = e.target;
  //   dispatch({ field: name, value: value });
  // };

  

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   let isValid = true;

  //   for (const input in state) {
  //     if (!!state.error || !state.value) {
  //       isValid = false;
  //       break;
  //     }
  //   }

  //   if (isValid) {
  //     console.log("form is valid, post this info!");
  //     // KIV: get response from api post, need to catch (and display) if api post throws error
  //     setShowSubmitFeedback(true);
  //   } else {
  //     console.log("form is invalid");
  //   }
  // };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    
    let isValid = true;
    if (isValid) {
      console.log("form is valid, post this info!");
      // KIV: get response from api post, need to catch (and display) if api post throws error
      setShowSubmitFeedback(true);
    } else {
      console.log("form is invalid");
    }

    setValidated(true);
  };


  const [showSubmitFeedback, setShowSubmitFeedback] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState({
    name: "Vehicle Name",
    person: 5,
    luggage: 2,
    doors: 2,
    transmission: "Auto",
    priceDay: 100,
    priceTotal: 130,
    deliveryCharge: 30,
  });

  const {
    SearchParameters,
    SelectedVehicle,
    ExtraOptions,
    PriceBreakdown
  } = RentState;

  console.log(ExtraOptions)
  return (
    <Default>
      <Breadcrumb title="Driver Details" />
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ marginTop: 30 }}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                  <h4>Driver Details</h4>
                  <Form.Text>
                    <div className="text-right">
                      <span style={{ color: "red" }}>*</span> Required Fields
                    </div>
                  </Form.Text>
                  <Form.Row>
                    <Form.Group className="col-md-5" controlId="givenName">
                      <Form.Label> Given Name <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Required" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid given name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-5" controlId="surname" style={{ marginLeft: 20 }}>
                      <Form.Label> Surname <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Required" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid surname.
                        </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group className="col-md-5" controlId="email">
                      <Form.Label> Email <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="email" placeholder="Required" required/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-5" controlId="contactNumber" style={{ marginLeft: 20 }}>
                      <Form.Label> Contact Number <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        placeholder="Required" 
                        pattern="[3/6/8/9]{1}[0-9]{7}"
                        maxlength="8"
                        required/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid contact number.
                        </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group className="col-md-5" controlId="drvingLicence-SN">
                      <Form.Label> Driving Licence - Class <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Required" required/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid driving licence - (e.g. Class 3).
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-5" controlId="drvingLicence-SN" style={{ marginLeft: 20 }}>
                      <Form.Label> Driving Licence - Serial Number <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Required" required/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid driving licence - serial number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-5" controlId="drivingLicence-DOI">
                      <Form.Label> Driving Licence - Date of Issue <span style={{ color: "red" }}>*</span></Form.Label>
                      <Form.Control type="date" placeholder="Required" required/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid driving licence - date of issue.
                        </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                  <Button
                    // href="/payment"
                    type="submit"
                    style={{ width: "100%", marginTop: "1rem" }}
                  >
                    <span style={{ color: "#fff" }}>Make Payment</span>
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-5" style={{ marginTop: 30, marginBottom: 30 }}>
            <Card>
              <Card.Body>
                <h4> Booking Details</h4>
                <div className="reservation-details col-lg-9">
                  <h6>Pick-up</h6>
                  <p>
                    <span className="d-block mb-3" style={{ fontSize: 16 }}>
                      363 Sembawang Road Goodlink Park Singapore 758379
                    <br />
                      {`${getDateTime(SearchParameters.pickUpTime)}`}
                    </span>
                  </p>
                  <h6>Drop-off</h6>
                  <p><span className="d-block mb-3" style={{ fontSize: 16 }}>
                    363 Sembawang Road Goodlink Park Singapore 758379
                    <br />
                    {`${getDateTime(SearchParameters.pickUpTime)}`}
                  </span></p>
                  <Button
                    href="/search-extras"
                    type="button"
                    // variant="outline-success"
                    style={{ marginBottom: 20 }}
                  >
                    <span style={{ color: "#fff" }}>Change Dates</span>
                  </Button>
                  <h6>Extra Options</h6>
                  
                  <Button
                    href="/search-extras"
                    type="button"
                    style={{ marginBottom: 20, color: "#5cb85c" }}
                  >
                    <span style={{ color: "#fff" }}>Change Options</span>
                  </Button>
                  {Object.keys(ExtraOptions).length !== 0 ? (
                    <ul>
                      {Object.values(ExtraOptions.render).map((value, id) => (
                        <li key={id}>
                          <span style={{ fontSize: 16 }}>
                            {!!value.value
                              ? value.value + " " + value.text
                              : value.text}
                            <br />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                      <p>No options selected</p>
                  )}
                </div>
                <div className="d-block col-lg-7">
                  <h6 style={{ fontWeight: 700 }}>Your Car</h6>
                  <h6>{SelectedVehicle.name}</h6>
                  {/* <img src={SelectedVehicle.img} alt={SelectedVehicle.name} /> */}
                  <img src="Images/car-400x300.png" />
                  <p>
                    {selectedVehicle.person} Persons <br />
                    {selectedVehicle.luggage} Luggages <br />
                    {selectedVehicle.doors} Doors <br />
                    {selectedVehicle.transmission} Transmission
                  </p>
                  <Button
                    href="/search"
                    type="button"
                    // variant="outline-success"
                    style={{ marginBottom: 20 }}
                  >
                    Change Car
                  </Button>
                </div>
                <div className="col-md-10">
                  <h6>
                    Pick-up from outlet |
                    Delivery $ 30 charge *
                  </h6>
                  <select className="col-md-7 form-control" style={{ marginBottom: 20, backgroundColor: "#5cb85c", color: "#fff" }}>
                    <option value="pickUp">Pick-up from outlet</option>
                    <option value="Delivery"> Delivery $ 30 charge</option>
                  </select>
                </div>
                <div className="d-block col-lg-7">
                  <h6 style={{ fontWeight: 700 }}> Price Breakdown</h6>
                  <p>
                    <span> Car Hire Charges</span>{" "}
                    <br />
                    <span>SGD {selectedVehicle.priceDay} / day</span> <br />
                    <span>SGD {selectedVehicle.deliveryCharge} / delivery</span> <br />
                  </p>
                  <p>
                    <span style={{ fontSize: 18, fontWeight: 600, color: "#5cb85c" }}>
                      Total: SGD {selectedVehicle.priceTotal}
                    </span>
                  </p>
                  {!!PriceBreakdown.childSeatCharge && (
                    <p className="h6 d-flex justify-content-between">
                      <span>Child Seat Charge</span>
                      <span>
                        {selectedVehicle.childSeatCharge}
                      </span>
                    </p>
                  )}
                </div>
                <div className="text-right" style={{ color: "red", marginTop: 30, fontSize: 10 }}>
                  <span style={{ color: "red" }}>* </span>
                  <span style={{ color: "#000" }}>Book 3 or more days to enjoy free delivery charge.</span>
                </div>
              </Card.Body>
            </Card>
            <div style={{ marginTop: 30, marginBottom: 30 }}>
              <Card className="rounded-0">
                <Card.Header
                  style={{ backgroundColor: "green", borderRadius: 0 }}
                >
                  <h4 style={{ color: "#ffffff" }}>Need Help?</h4>
                </Card.Header>
                <Card.Body>
                  <span className="d-block mb-3">
                    Have a question or need to clarify something?
                  </span>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="light"
                      href="tel:67532536"
                      style={{ width: "48%", padding: "11px 24px" }}
                    >
                      Call Us
                    </Button>
                    <Button
                      href="mailto:sales@chans.com.sg"
                      style={{ width: "48%", padding: "11px 24px" }}
                    >
                      Email Us
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, {
  getCategories,
  getSearch,
  updateSelectedVehicle,
  updatePrice,})(DriverDetails);
