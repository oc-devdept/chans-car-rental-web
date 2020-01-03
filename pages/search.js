import React from "react"
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "../components/VehicleSearch/VehicleSearch";
import SearchSortbar from "../components/VehicleSearch/SearchSortbar";

const Search = () => {
  return(
    <Default>
      <div className="container">
        <VehicleSearch />
      </div>
      <div className="container">
        <SearchSortbar noOfResults="3"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            results
          </div>
          <div className="col-md-3">
            filters
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Search