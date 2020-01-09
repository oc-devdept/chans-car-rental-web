import React from "react"
import Button from "react-bootstrap/Button"

const SearchItem = props => {
  return(
    <div className="container search-item">
      <div className="row">
        <div className="col-lg-4 search-item-image">
          <img src={ props.image } />
        </div>
        <div className="col-lg-5 search-item-details">
          <div className="search-item-category">
            <p>category</p>
          </div>
          <div className="search-item-name">
            <p>{ props.name }</p>
          </div>
          <div className="search-item-properties">
            <div className="search-item-person">
              <img src="../../images/icon-person.png" />
              <p>{ props.person }</p>
            </div>
            <div className="search-item-luggage">
              <img src="../../images/icon-luggage.png" />
              <p>{ props.luggage }</p>
            </div>
            <div className="search-item-door">
              <img src="../../images/icon-car-door.png" />
              <p>{ props.doors }</p>
            </div>
            <div className="search-item-transmission">
              <img src="../../images/icon-gearbox.png" />
              <p>{ props.transmission }</p>
            </div>
          </div>
          <div className="search-item-points">
            <p><i class="fas fa-check" /> Fuel Policy: Same-to-same</p>
            <p><i class="fas fa-check" /> Mileage Included: Unlimited</p>
          </div>
        </div>
        <div className="col-lg-3 search-item-pricing">
          <p className="search-item-price-text">Total price:</p>
          <p className="search-item-old-price">${ props.oldPrice }</p>
          <p className="search-item-price">${ props.price }</p>
          <Button href="/">Book Now</Button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem