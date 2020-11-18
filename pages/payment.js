import React, { useState, useEffect, useReducer } from "react";
import Router from "next/router";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";
import Breadcrumb from "Components/Common/Breadcrumb";
import Link from "next/link";

// import OrderList from "Components/checkout/OrderList";
import LoginOverlay from "Components/checkout/LoginOverlay";
import CreditCardForm from "Components/checkout/CreditCardForm";

import { Card, Form, Button } from "react-bootstrap";
import Default from "Components/Layout/PageTemplates/Default";
import { getTheDate, getDateTime, formatPrice } from "Components/Helpers/helpers";
import { connect } from "react-redux";
import {
    getCategories,
    getSearch,
    updateSelectedVehicle,
} from "Ducks/rent/RentActions";

import { useDispatch, useSelector } from "react-redux";
import { getCheckout } from "Ducks/checkout";

import { isLoggedIn } from "../utils/auth";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_3vnpI7Sjl12kIRzatYlLkFV100HLq2KTrS');

const Payment = ({ RentState, updatePrice }) => {

    console.log("rentstate= ", RentState);

    const dispatch = useDispatch();
    // React.useEffect(() => {
    // const localCart = JSON.parse(localStorage.getItem("vc-shoppingcart"));
    // if (localCart) {
    //     dispatch(getCheckout());
    // } else {
    //     Router.replace("/");
    // }
    // }, []);
    const checkoutState = useSelector(state => state.CheckoutState);

    const [selectedVehicle, setSelectedVehicle] = useState({
        name: "Vehicle Name",
        person: 5,
        luggage: 2,
        doors: 2,
        transmission: "Auto",
        priceDay: 100,
        priceTotal: 300,
    });

    const {
        SearchParameters,
        SelectedVehicle,
        ExtraOptions,
        PriceBreakdown
    } = RentState;

    // console.log("checkout props= ", props);
    // console.log("checkoutState= ", checkoutState);
    return (
        <Default>
            <Breadcrumb title="Payment" />
            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ marginTop: 30 }}>
                        <Card>
                            <Card.Body>
                                <h4> Driver Details</h4>
                                <div className="row">
                                    <div className="col-sm">
                                        <h6> Name</h6>
                                        <p> Lorem</p>
                                    </div>
                                    <div className="col-sm">
                                        <h6> Email</h6>
                                        <p> Lorem@gmail.com</p>
                                    </div>
                                    <div className="col-sm">
                                        <h6> Contact Number</h6>
                                        <p> 12345678</p>
                                    </div>
                                </div>
                                <Button
                                    href="/customerdetails"
                                    type="button"
                                    style={{ marginTop: 20, color: "#5cb85c" }}
                                >
                                    <span style={{ color: "#fff" }}>Edit</span>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginTop: 30 }}>
                            <Card.Body>
                                <Elements stripe={stripePromise}>
                                    <CreditCardForm />
                                </Elements>
                                {/* {loggedIn ? <CreditCardForm /> : <LoginOverlay />} */}
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
                                    <h6>Extra Options</h6>
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
                                <br/ >
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
                                        href="/rent/search"
                                        type="button"
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
                                    {/* <Form style={{ marginBottom: 20 }}>
                                    <Form.Control
                                        type= "tel"
                                        placeholder="Postal Code"
                                        />
                                    </Form> */}
                                </div>
                                <div className="d-block col-lg-7">
                                    <h6 style={{ fontWeight: 700 }}> Price Breakdown</h6>
                                    <p>
                                        <span> Car Hire Charges</span>{" "}
                                        <br />
                                        <span>SGD {selectedVehicle.priceDay}/day</span> <br />
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
                        <Card className="rounded-0" style={{ marginTop: 30 }}>
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
        </Default>
    );
};

Payment.getInitialProps = ctx => {
    const loggedIn = isLoggedIn(ctx);
    // props that returned if user is logged in
    return { loggedIn };
};

const mapStateToProps = state => {
    const { RentState } = state;
    return { RentState };
};

export default connect(mapStateToProps, {
    getCategories,
    getSearch,
    updateSelectedVehicle,
})(Payment);
