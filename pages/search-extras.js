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
    price: 100
  });

  const [childSeats, setChildSeats] = useState(0);
  const [malaysiaTravel, setMalaysiaTravel] = useState(false);

  return (
    <Default>
      <div className="search-extras">
        <div className="container mb-3">
          <VehicleSearchMobile />
          <VehicleSearch />
        </div>
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-3">
              <img src="Images/car-400x300.png" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
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
            <div className="col-lg-3 search-extras-price d-flex flex-column justify-content-center">
              <p>Car Hire Charges</p>
              <p>SGD {selectedVehicle.price}</p>
            </div>
          </div>
          <Card className="mb-3">
            <Card.Body>
              <span style={{ fontSize: 22, fontWeight: 600 }}>
                Add more options
              </span>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="row align-items-center">
                    <div className="option-image col-2 d-flex justify-content-center">
                      <img
                        src="Images/car-seat.png"
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <div className="option-text col-6">
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
                    <div className="option-seats col-2">
                      <InputGroup>
                        <InputGroup.Prepend>
                          <button
                            onClick={
                              childSeats > 0
                                ? () => setChildSeats(childSeats - 1)
                                : null
                            }
                            style={{
                              border: "none",
                              backgroundColor: "#E9EcEF",
                              paddingLeft: "1rem"
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
                        />
                        <InputGroup.Append>
                          <button
                            onClick={
                              childSeats < 2
                                ? () => setChildSeats(childSeats + 1)
                                : null
                            }
                            style={{
                              border: "none",
                              backgroundColor: "#E9EcEF",
                              paddingRight: "1rem"
                            }}
                          >
                            <i
                              className="fas fa-plus"
                              style={
                                childSeats === 2 ? { color: "#808080" } : null
                              }
                            ></i>
                          </button>
                        </InputGroup.Append>
                      </InputGroup>
                    </div>
                    <div className="option-price col-2">
                      <p style={{ fontWeight: 600, textAlign: "center" }}>
                        SGD 30.00/rental
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row align-items-center">
                    <div className="option-image col-2 d-flex justify-content-center">
                      <img
                        src="Images/malaysia.png"
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <div className="option-text col-6">
                      <p>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>
                          Travel to Malaysia
                        </span>
                        <br />
                        Additional charges may be incurred for travelling to
                        Malaysia with our vehicles. Read our{" "}
                        <span className="d-inline-block">
                          <a href="#">Terms and Conditions</a>
                        </span>{" "}
                        for the full information.
                      </p>
                    </div>
                    <div className="option-selection col-4 d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label=""
                        id="malaysiaTravel"
                        value={malaysiaTravel}
                        onChange={() => setMalaysiaTravel(!malaysiaTravel)}
                      ></Form.Check>
                      <p style={{ lineHeight: 1.2 }}>
                        By selecting this option, you understand and agree to
                        the Terms and Conditions stated.
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
              <a href="#" target="_blank" className="d-inline-block">
                View the complete breakdown of possible charges here
              </a>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
              <Button
                variant="outline-primary"
                href="#"
                className="mx-2 rounded"
                style={{ flex: "0 1 200px" }}
              >
                <span style={{ fontWeight: 600, fontSize: 20 }}>
                  Book without
                </span>
                <br />
                Full Coverage
              </Button>
              <Button
                href="#"
                className="mx-2 rounded"
                style={{ flex: "0 1 200px" }}
              >
                <span style={{ fontWeight: 600, fontSize: 20 }}>Book with</span>
                <br />
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
