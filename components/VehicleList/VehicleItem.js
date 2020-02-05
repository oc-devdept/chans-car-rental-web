import React from "react"
import Button from "react-bootstrap/Button"

const VehicleItem = props => {
  return(
    <div className="vehicle-item">
      <div className="row">
        <div className="col-5 col-md-4 vehicle-image">
          <img src={ props.image } />
        </div>
        <div className="col-7 col-md-5 vehicle-properties">
          <div className="vehicle-item-category">
            <p>category</p>
          </div>
          <div className="vehicle-item-name">
            <p>{ props.name }</p>
          </div>
          <div className="vehicle-item-person">
            <img src="../../images/icon-person.png" />
            <p>{ props.person } Person</p>
          </div>
          <div className="vehicle-item-luggage">
            <img src="../../images/icon-luggage.png" />
            <p>{ props.luggage } Luggages</p>
          </div>
          <div className="vehicle-item-door">
            <img src="../../images/icon-car-door.png" />
            <p>{ props.doors } Doors</p>
          </div>
          <div className="vehicle-item-transmission">
            <img src="../../images/icon-gearbox.png" />
            <p>{ props.transmission }</p>
          </div>
        </div>
        <div className="col-12 col-md-3 vehicle-pricing">
          <div className="vehicle-pricing-text">
            <p>Price for 1 day:</p>
            <p className="vehicle-price">S${ props.price }/day</p>
          </div>
          <div className="vehicle-pricing-button">
            <Button href="/">Rent a car now</Button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default VehicleItem