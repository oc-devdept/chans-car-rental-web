import React from "react"
// Page Layout
import Default from "Components/Layout/PageTemplates/Default"
import VehicleSearch from "Components/VehicleSearch/VehicleSearch"
import SearchSortbar from "Components/VehicleSearch/SearchSortbar"
import SearchFilter from "Components/VehicleSearch/SearchFilter"
import SearchList from "../components/VehicleSearch/SearchList"

const Search = () => {
  return(
    <Default>
      <div className="container">
        <VehicleSearch />
      </div>
      <div className="container mb-3">
        <SearchSortbar noOfResults="3" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <SearchList />
          </div>
          <div className="col-md-4 col-lg-3">
            <SearchFilter />
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Search