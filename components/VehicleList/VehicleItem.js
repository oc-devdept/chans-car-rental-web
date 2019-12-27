import React from "react"
import Button from "react-bootstrap/Button"

function VehicleItem(props) {
  return(
    <div className="vehicle-item">
      <div className="row">
        <div className="col-5 col-md-4">
          <img src={ props.image } />
        </div>
        <div className="col-7 col-md-5">
          <div className="vehicle-item-category">
            <p>{ props.category }</p>
          </div>
          <div className="vehicle-item-name">
            <h2>{ props.name }</h2>
          </div>
          <div className="vehicle-item-person">
            <i class="fas fa-user" />
            <p>{ props.person } Person</p>
          </div>
          <div className="vehicle-item-luggage">
            <i class="fas fa-suitcase" />
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
        <div className="col-12 col-md-3">
          <p>Price for 1 day:</p>
          <p>S$ { props.price } / day</p>
          <Button href="#">Rent a car now</Button>
        </div>  
      </div>
    </div>
  )
}

export default VehicleItem