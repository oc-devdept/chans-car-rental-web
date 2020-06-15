import React, { useState, useEffect, useReducer } from "react";
import Breadcrumb from "Components/Common/Breadcrumb";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import Default from "Components/Layout/PageTemplates/Default";
import { getTheDate, getDateTime, formatPrice } from "Components/Helpers/helpers";

import {
    getCategories,
    getSearch,
    updateSelectedVehicle,
} from "Ducks/rent/RentActions";

const Summary = ({ RentState, updatePrice }) => {

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

    return (
        <Default>
            <Breadcrumb title="Summary" />
            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ marginTop: 30 }}>
                        <Card>
                            <Card.Header style={{ backgroundColor: "green", borderRadius: 0 }}>
                                <h4 style={{ color: "#ffffff" }}> Driver Details</h4>
                            </Card.Header>
                            <Card.Body>
                                <h6> Name : &nbsp;&nbsp;&nbsp;&nbsp; <span> Lorem </span></h6>
                                <h6> Email : &nbsp;&nbsp;&nbsp;&nbsp; <span> Lorem@gmail.com </span></h6>
                                <h6> Contact Number : &nbsp;&nbsp;&nbsp;&nbsp; <span> 12345678 </span></h6>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginTop: 30 }}>
                            <Card.Header style={{ backgroundColor: "green", borderRadius: 0 }}>
                                <h4 style={{ color: "#ffffff" }}> Booking Details</h4>
                            </Card.Header>
                            <Card.Body>
                                <h6> Pick-up Location : &nbsp;&nbsp;&nbsp;&nbsp; <span> Lorem </span></h6>
                                <br />
                                <h6> Pick-up Date/Time : &nbsp;&nbsp;&nbsp;&nbsp; <span> Lorem </span></h6>
                                <br />
                                <h6> Drop-off Location : &nbsp;&nbsp;&nbsp;&nbsp; <span> Lorem@gmail.com </span></h6>
                                <br />
                                <h6> Drop Off Date/Time : &nbsp;&nbsp;&nbsp;&nbsp; <span> 12345678 </span></h6>
                                <br />
                                <h6> Selected Vehicle :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <h6>{SelectedVehicle.name}</h6> */}
                                    {/* <img src={SelectedVehicle.img} alt={SelectedVehicle.name} /> */}
                                    <span><img src="Images/car-400x300.png" width="50%"/></span>
                                </h6>
                                <h6> Vehicle Details :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <p className="d-inline-block">
                                        <span>{selectedVehicle.person} Persons <br /></span>
                                        <span>{selectedVehicle.luggage} Luggages <br /></span>
                                        <span>{selectedVehicle.doors} Doors <br /></span>
                                        <span>{selectedVehicle.transmission} Transmission <br /></span>
                                    </p>
                                </h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-5" style={{ marginTop: 30 }}>
                        <Card>
                            <Card.Header style={{ backgroundColor: "green", borderRadius: 0 }}>
                                <h4 style={{ color: "#ffffff" }}> Summary of Charge</h4>
                            </Card.Header>
                            <Card.Body>
                                <h6> Payment Date : &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span> 
                                    {`${getDateTime(SearchParameters.pickUpTime)}`}
                                    </span>
                                </h6>
                                <br />
                                <h6> Payment Method : &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span> VISA</span>
                                </h6>
                                <br />
                                <h6> Billing Name :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span> John</span>
                                </h6>
                                <br />
                                <h6> Car Rental Charge :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>SGD {selectedVehicle.priceDay}/day</span> <br /> 
                                </h6>
                                <br />
                                <h6> Collision Damage Waiver :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>SGD {selectedVehicle.priceDay}/day</span> <br /> 
                                </h6>
                                <br />
                                <h6> Delivery Charge :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>SGD {selectedVehicle.priceDay}/day</span> <br /> 
                                </h6>
                                <br />
                                <h6> Subtotal :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>SGD {selectedVehicle.priceDay}/day</span> <br /> 
                                </h6>
                                <br />
                                <h6> GST (7%) :  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>SGD {selectedVehicle.priceDay}/day</span> <br /> 
                                </h6>
                                <br />
                                <h6 style={{ fontSize: 18, fontWeight: 600, color: "#5cb85c" }}> Total : &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span> ${selectedVehicle.priceTotal}</span>
                                </h6>
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

const mapStateToProps = state => {
    const { RentState } = state;
    return { RentState };
};

export default connect(mapStateToProps, {
    getCategories,
    getSearch,
    updateSelectedVehicle,
})(Summary);


