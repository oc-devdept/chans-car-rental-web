import React from "react"
import VehicleItem from "./VehicleItem"
import "../../assets/styles/vehicle-list.css"

import carList from "../../data/car-list.json"

// This component should eventually be taking in props from an api call
// to dynamically display data
const VehicleList = () => {
  const cars = carList["car-list"]

  return(
    <>
      { cars.map(( item, id ) => {
        return(
          <VehicleItem 
            key={ id }
            image={ item.img }
            category={ item.catId }
            name={ item.name }
            person={ item.person }
            luggage={ item.luggage }
            doors={ item.doors }
            transmission={ item.transmission }
            price={ item.price }
          />   
        )
      })}
    </>
  )
}

export default VehicleList