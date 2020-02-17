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

  return (
    <Default>
      <div className="search-extras">
        <div className="container mb-3">
          <VehicleSearchMobile />
          <VehicleSearch />
        </div>
        <div className="container">
          <div className="row">
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
          <Card>
            <Card.Header>Add more options</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="row">
                  <div className="option-image col-2"></div>
                  <div className="option-text col-6">
                    <p>Child Seat</p>
                    <p>
                      Anyone below the height of 1.35m is required to be secured
                      in a child seat during travel by law.
                    </p>
                  </div>
                  <div className="option-price col-2">
                    <p>SGD 30.00/rental</p>
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
                        id="child-seats"
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
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="row">
                  <div className="option-image col-2"></div>
                  <div className="option-text col-6">
                    <p>Travel to Malaysia</p>
                    <p>
                      Additional charges may be incurred for travelling to
                      Malaysia with our vehicles. Read our{" "}
                      <span className="d-inline-block">
                        <a href="#">Terms and Conditions</a>
                      </span>{" "}
                      for the full information.
                    </p>
                  </div>
                  <div className="option-price col-2"></div>
                  <div className="option-selection col-2"></div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card>
            <Card.Title>Coverage options</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card>
        </div>
      </div>
      <div className="search-extras"></div>
      <div className="search-cdw"></div>
      <div className="search-tcs"></div>
    </Default>
  );
};

export default SearchExtras;
