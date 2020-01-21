import React, { Component } from "react"
// Page Layout
import Default from "Components/Layout/PageTemplates/Default"
import VehicleSearch from "Components/VehicleSearch/VehicleSearch"
import VehicleSearchMobile from "Components/VehicleSearch/VehicleSearchMobile"
import SearchSortbar from "Components/VehicleSearch/SearchSortbar"
import SearchFilter from "Components/VehicleSearch/SearchFilter"
import SearchList from "Components/VehicleSearch/SearchList"
import SearchFilterMobile from "Components/VehicleSearch/SearchFilterMobile"
import { Button, Modal } from "react-bootstrap"
import "../assets/styles/search.css"

import CarCategories from "../data/car-categories.json"
import CommercialCategories from "../data/commercial-categories.json"


class Search extends Component {
  constructor(props) {
    super(props)

    const { carCategories } = CarCategories
    const { commercialCategories } = CommercialCategories

    // might need to store dates selected in state down the road
    this.state = {
      showModal: false,
      filter: {
        type: "cars",
        carsCategory: { },
        commercialCategory: { }
      },
      search: {
        pickUpTime: "10:00",
        pickUpDate: "1st January 2020",
        dropOffTime: "10:00",
        dropOffDate: "3rd January 2020"
      }
    }

    carCategories.forEach( item => {
      this.state.filter.carsCategory[item.catName] = false
    })
    commercialCategories.forEach( item => {
      this.state.filter.commercialCategory[item.catName] = false
    })

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleTypeChange(type) {
    type === "cars" ?
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          type: "cars"
        }
      }) :
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          type: "commercial"
        }
      })
  }
  
  handleCategoryChange(type, id, checked) {
    switch (type) {
      case "cars":
        this.setState({
          ...this.state,
          filter: {
            ...this.state.filter,
            carsCategory: {
              ...this.state.filter.carsCategory,
              [id]: checked
            }
          }
        })
        break
      case "commercial":
        this.setState({
          ...this.state,
          filter: {
            ...this.state.filter,
            commercialCategory: {
              ...this.state.filter.commercialCategory,
              [id]: checked
            }
          }
        })
        break
      default:
        this.setState(this.state)
        console.log("switch default case")
        break
    }
  }

  handleOpen() {
    this.setState({
      ...this.state,
      showModal: true
    })
  }

  handleClose() {
    this.setState({
      ...this.state,
      showModal: false
    })
  }

  render() {
    console.log(this.state)
    return(
      <Default>
        <div className="search-page">
          <div className="container">
            <VehicleSearch />
            {/* <VehicleSearchMobile search={ this.state.search } /> */}
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
                <SearchFilter 
                  type={ this.state.filter.type }
                  carsCategory={ this.state.filter.carsCategory }
                  commercialCategory={ this.state.filter.commercialCategory }
                  onTypeChange={ this.handleTypeChange }
                  onCategoryChange={ this.handleCategoryChange }
                />
              </div>
            </div>
          </div>
          <div className="mobile-filter-toggle">
            <Button onClick={ this.handleOpen } variant="secondary">
              <i className="fas fa-filter" /> Filter
            </Button>
          </div>
          <div className="mobile-filter">
            <Modal
              show={ this.state.showModal }
              onHide={ this.handleClose }
              dialogClassName="mobile-filter-modal"
            > 
              <Modal.Header closeButton>
                <Modal.Title>Filters</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* <SearchFilter 
                  type={ this.state.filter.type }
                  carsCategory={ this.state.filter.carsCategory }
                  commercialCategory={ this.state.filter.commercialCategory }
                  onTypeChange={ this.handleTypeChange }
                  onCategoryChange={ this.handleCategoryChange }
                /> */}
                Work in Progress
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={ this.handleClose }>
                  Apply
                </Button>
                <Button onClick={ this.handleClose } variant="outline-primary">
                  Reset 
                </Button>
              </Modal.Footer>
            </Modal>  
          </div>
        </div>
      </Default>
    )
  }
}

export default Search