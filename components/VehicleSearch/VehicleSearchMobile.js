import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VehicleSearch from "Components/VehicleSearch/VehicleSearch";

  const VehicleSearchMobile = (props) => {

  const [timing] = useState({
    pickUpDate: props.searchParameters.pickUpDate,
    pickUpTime: props.searchParameters.pickUpTime,
    dropOffDate: props.searchParameters.dropOffDate,
    dropOffTime: props.searchParameters.dropOffTime,
  });
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      <div className="search-mobile-details">
        <div className="col-10">
          <p>363 Sembawang Road Goodlink Park</p>
          <p>{`${timing.pickUpDate}, ${timing.pickUpTime} - ${timing.dropOffDate}, ${timing.dropOffTime}`}</p>
          </div>
        <div
          className="col-2 d-flex justify-content-center align-items-center"
          onClick={() => setShowSearchModal(true)}
        >
          <i className="far fa-edit" />
        </div>
      </div>
      <div className="search-mobile">
        <Modal
          show={showSearchModal}
          onHide={() => setShowSearchModal(false)}
          dialogClassName="search-mobile-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <p>363 Sembawang Road Goodlink Park</p>
              <p>{`${timing.pickUpDate}, ${timing.pickUpTime} - ${timing.dropOffDate}, ${timing.dropOffTime}`}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VehicleSearch
              searchParameters={props.searchParameters}
              getSearch={props.getSearch}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowSearchModal(false)}
              variant="outline-secondary"
            >
              Close
            </Button>
            <Button onClick={() => setShowSearchModal(false)}>Search</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default VehicleSearchMobile;
