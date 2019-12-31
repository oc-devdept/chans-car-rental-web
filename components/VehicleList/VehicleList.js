import React from "react"
import VehicleItem from "./VehicleItem"

import carList from "../../data/car-list.json"

function VehicleList(props) {
  return(
    <>
      {console.log(Object.values(carList))}
      { Object.values(carList).map(( item, id ) => {
        console.log(id)
        console.log(item)
        // <VehicleItem 
        //   key={ id }
        //   image={ item.img }
        //   category={ item.catId }
        //   name={ item.name }
        //   person={ item.person }
        //   luggage={ item.luggage }
        //   doors={ item.doors }
        //   transmission={ item.transmission }
        //   price={ item.price }
        // />  
      })}
    </>
  )
}

export default VehicleList