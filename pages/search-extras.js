import React, { useState, useEffect } from "react"

import Default from "Components/Layout/PageTemplates/Default"
import VehicleSearch from "Components/VehicleSearch/VehicleSearch"

const SearchExtras = (props) => {
  const [selectedVehicle, setSelectedVehicle] = useState({name:"Vehicle Name", person:5, luggage:2, doors:2, transmission:"Auto"})
  
  return(
    <Default>
      <div className="search-selected-vehicle">
        <VehicleSearch />
        <div className="row">
          <div className="col-5">
            <img src="Images/car-400x300.png" />
          </div>
          <div className="col-7">
            <div className="search-selected-name">
              <p>{ selectedVehicle.name }</p>
            </div>
            <div className="search-selected-properties">
              <div className="search-selected-person">
                <img src="Images/icon-person.png" />
                <p>{ selectedVehicle.person }</p>
              </div>
              <div className="search-selected-luggage">
                <img src="Images/icon-luggage.png" />
                <p>{ selectedVehicle.luggage }</p>
              </div>
              <div className="search-selected-door">
                <img src="Images/icon-car-door.png" />
                <p>{ selectedVehicle.doors }</p>
              </div>
              <div className="search-item-transmission">
                <img src="Images/icon-gearbox.png" />
                <p>{ selectedVehicle.transmission }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-extras">
        
      </div>
      <div className="search-cdw">

      </div>
      <div className="search-tcs">

      </div>
    </Default>
  )
}

export default SearchExtras