import React, { useState, useEffect } from "react";

import Default from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/VehicleSearch/VehicleSearch";
import VehicleSearchMobile from "Components/VehicleSearch/VehicleSearchMobile";
import "Styles/search.css";
import { Card, ListGroup, Form, InputGroup, Button } from "react-bootstrap";

const SearchExtras = props => {
  const [selectedVehicle, setSelectedVehicle] = useState({
    name: "Vehicle Name",
    person: 5,
    luggage: 2,
    doors: 2,
    transmission: "Auto",
    priceDay: 100,
    priceTotal: 300,
    rentalPrice: 0,
    malaysiaPrice: 30,
    rentalPriceDecimal: ".00"
  });

  const [childSeats, setChildSeats] = useState(0);
  const [malaysiaTravel, setMalaysiaTravel] = useState(false);

  // var checkBox = document.getElementById("malaysiaTravel");

  const SetStatesDecrement = () => {
    // console.log("decrement is working");
    setChildSeats(childSeats - 1);
    // console.log(childSeats);
    setSelectedVehicle({ ...selectedVehicle, rentalPrice: selectedVehicle.rentalPrice ? 30 * (childSeats - 1): 30 });
    // console.log(selectedVehicle.rentalPrice);
  }

  const SetStateIncrement = () => {
    // console.log("increment is working");
    setChildSeats(childSeats + 1);
    // console.log(childSeats);
    setSelectedVehicle({ ...selectedVehicle, rentalPrice: selectedVehicle.rentalPrice ? 30 * (childSeats + 1): 30 });
    // console.log(selectedVehicle.rentalPrice);
  }

  const SetStateMalaysia = () => {
    console.log("YYYYYY");
    // setSelectedVehicle({ ...selectedVehicle, malaysiaPrice: 30 });
  }


  return (
    <Default>
      <div className="search-extras">
        <div className="container mb-3">
          <VehicleSearchMobile />
          <VehicleSearch />
        </div>
        <div className="container">
          <Card className="mb-3">
            <Card.Body>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3 d-flex align-items-center">
                  <img src="Images/car-400x300.png" />
                </div>
                <div className="col-6 col-md-5 col-lg-6 d-flex flex-column justify-content-center">
                  <div className="search-extras-name">
                    <p className="h4">{selectedVehicle.name}</p>
                  </div>
                  <div className="search-extras-properties">
                    <div className="search-extras-person d-inline-flex mr-1">
                      {/* <img src="Images/icon-person.png" className="mr-1" /> */}
                      <p>{selectedVehicle.person} Persons |</p>
                    </div>
                    <div className="search-extras-luggage d-inline-flex mr-1">
                      {/* <img src="Images/icon-luggage.png" className="mr-1" /> */}
                      <p>{selectedVehicle.luggage} Luggages |</p>
                    </div>
                    <div className="search-extras-door d-inline-flex mr-1">
                      {/* <img src="Images/icon-car-door.png" className="mr-1" /> */}
                      <p>{selectedVehicle.doors} Doors |</p>
                    </div>
                    <div className="search-item-transmission d-inline-flex mr-1">
                      {/* <img src="Images/icon-gearbox.png" className="mr-1" /> */}
                      <p>{selectedVehicle.transmission} Transmission</p>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-flex col-md-3 col-lg-3 search-extras-price flex-column justify-content-center">
                  <p style={{ lineHeight: 1.4 }}>
                    <span style={{ fontSize: 20 }}>Car Hire Charges</span>{" "} <br />
                    <span>SGD {selectedVehicle.priceDay}/day</span> <br />
                    <span>(* Additional charges may be incurred)</span> <br />
                    {malaysiaTravel ? (
                      <span style={{ fontSize: 18, fontWeight: 600 }}>
                        Total: SGD {selectedVehicle.priceTotal + selectedVehicle.rentalPrice + 30}
                      </span>
                    ) : <span style={{ fontSize: 18, fontWeight: 600 }}>
                          Total: SGD {selectedVehicle.priceTotal + selectedVehicle.rentalPrice}
                        </span> }  
                  </p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer
              className="d-md-none"
              style={{
                backgroundColor: "#5faf57",
                borderColor: "#5faf57",
                padding: ".25rem 1.25rem"
              }}
            >
              <p style={{ color: "#ffffff", fontSize: 16, textAlign: "right" }}>
                Total Car Hire Charge:{" "}
                <span
                  style={{
                    fontWeight: 600
                  }}
                >
                  SGD {selectedVehicle.priceTotal}
                </span>
              </p>
            </Card.Footer>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <span style={{ fontSize: 22, fontWeight: 600 }}>
                Add more options
              </span>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="row align-items-center">
                    <div className="option-image col-4 col-md-2 d-flex justify-content-center">
                      <img
                        src="Images/car-seat.png"
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <div className="option-text col-8 col-md-6">
                      <p>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600
                          }}
                        >
                          Child Seat
                        </span>
                        <br />
                        Anyone below the height of 1.35m is required to be
                        secured in a child seat during travel by law.
                      </p>
                    </div>
                    <div className="option-seats col-4 col-md-2">
                      <InputGroup>
                        <InputGroup.Prepend>
                          <button
                            onClick={
                              childSeats > 0
                                ? () => SetStatesDecrement()
                                : null
                            }
                            style={{
                              border: "none",
                              backgroundColor: "#E9EcEF",
                              padding: "0 0.5rem"
                            }}
                          >
                            <i
                              className="fas fa-minus"
                              style={
                                childSeats === 0 ? { color: "#808080" } : null
                              }
                            ></i>
                          </button>
                        </InputGroup.Prepend>
                        <Form.Control
                          value={childSeats}
                          id="childSeats"
                          disabled
                          className="text-center"
                          style={{ padding: 0 }}
                        />
                        <InputGroup.Append>
                          <button
                            onClick={
                              childSeats < 2
                                ? () => SetStateIncrement()
                                : null
                            }
                            style={{
                              border: "none",
                              backgroundColor: "#E9EcEF",
                              padding: "0 0.5rem"
                            }}
                          >
                            <i
                              className="fas fa-plus"
                              style={
                                childSeats === 2 ? { color: "#808080" } : null
                              }
                            ></i>
                          </button>
                          {/* {console.log("UUUUUU")}
                          {console.log(childSeats)}
                          {console.log(selectedVehicle.rentalPrice)} */}
                        </InputGroup.Append>
                      </InputGroup>
                    </div>
                    <div className="option-price col-8 col-md-2">
                      <p style={{ fontWeight: 600 }}>SGD {selectedVehicle.rentalPrice}{selectedVehicle.rentalPriceDecimal}/rental</p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row align-items-center">
                    <div className="option-image col-4 col-md-2 d-flex justify-content-center">
                      <img
                        src="Images/malaysia.png"
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <div className="option-text col-8 col-md-6">
                      <p>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>
                          Travel to Malaysia (30.00 SGD/Day)
                        </span>
                        <br />
                        Additional charges may be incurred for travelling to
                        Malaysia with our vehicles. Read our{" "}
                        <a href="#" className="d-inline">
                          Terms and Conditions
                        </a>{" "}
                        for the full information.
                      </p>
                    </div>
                    <div className="option-selection col-12 col-md-4 d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label=""
                        id="malaysiaTravel"
                        value={malaysiaTravel}
                        onChange={() => setMalaysiaTravel(!malaysiaTravel)}
                        onClick={SetStateMalaysia()}
                      />
                      <p style={{ lineHeight: 1.2 }}>
                        By selecting this option, you understand and agree to
                        the{" "}
                        <a href="#" className="d-inline">
                          Terms and Conditions
                        </a>{" "}
                        stated.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <span style={{ fontSize: 22, fontWeight: 600 }}>
                Collision Damage Waiver
              </span>
              <br />
              <p>
                In the event of an accident during the rental period, you will
                be charged for the damages (known as the "excess"). By
                purchasing an extensive coverage, we will refund you the amount!
              </p>
              <div style={{ color: "#666666", marginBottom: "0.5rem" }}>
                <i
                  className="fas fa-shield-alt"
                  style={{
                    fontSize: 24,
                    marginRight: "0.5rem"
                  }}
                ></i>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600
                  }}
                >
                  Full coverage includes:
                </span>
              </div>
              <ul style={{ color: "#666666" }}>
                <li>The vehicle excess</li>
                <li>Theft or vandalism of vehicle</li>
                <li>Loss of car key</li>
                <li>Other miscellaneous fees</li>
              </ul>
              <a href="#" target="_blank" className="d-inline">
                View the complete breakdown of possible charges here
              </a>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
              <Button
                variant="outline-primary"
                href="/checkout"
                className="mx-2 rounded d-flex flex-column justify-content-center"
                style={{ flex: "0 1 200px" }}
              >
                <span style={{ fontWeight: 600, fontSize: 20 }}>
                  Book without
                </span>
                Full Coverage
              </Button>
              <Button
                href="/checkout"
                className="mx-2 rounded d-flex flex-column justify-content-center"
                style={{ flex: "0 1 200px" }}
              >
                <span style={{ fontWeight: 600, fontSize: 20 }}>Book with</span>
                Full Coverage
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </Default>
  );
};

export default SearchExtras;
