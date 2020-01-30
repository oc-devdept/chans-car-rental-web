import React, { Component } from "react"
// Page Layout
import Default from "Components/Layout/PageTemplates/Default"
import VehicleSearch from "Components/VehicleSearch/VehicleSearch"
import SearchSortbar from "Components/VehicleSearch/SearchSortbar"
import SearchFilter from "Components/VehicleSearch/SearchFilter"
import SearchList from "Components/VehicleSearch/SearchList"
import SearchFilterMobile from "Components/VehicleSearch/SearchFilterMobile"
import { Button, Modal } from "react-bootstrap"
import "Styles/search.css"

import CarCategories from "../data/car-categories.json"
import CommercialCategories from "../data/commercial-categories.json"

class Search extends Component {
  constructor(props) {
    super(props)

    const { carCategories } = CarCategories
    const { commercialCategories } = CommercialCategories

    // might need to store dates selected in state down the road
    this.state = {
      showSearchModal: false,
      showFilterModal: false,
      filter: {
        type: "cars",
        carsCategory: { },
        commercialCategory: { }
      },
      search: {
        pickUpTime: "10:00",
        pickUpDate: "1st Jan 2020",
        dropOffTime: "10:00",
        dropOffDate: "3rd Jan 2020"
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

  handleOpen(type) {
    switch(type) {
      case "filter":
        this.setState({
          ...this.state,
          showFilterModal: true
        })
        break
      case "search":
        this.setState({
          ...this.state,
          showSearchModal: true
        })
        break
      default:
        this.setState(this.state)
        break
    }
  }

  handleClose(type) {
    switch(type) {
      case "filter":
        this.setState({
          ...this.state,
          showFilterModal: false
        })
        break
      case "search":
        this.setState({
          ...this.state,
          showSearchModal: false
        })
        break
      default:
        this.setState(this.state)
        break
    }
  }

  render() {
    console.log(this.state)
    return(
      <Default>
        <div className="search-page">
          <div className="container">
            <div className="search-mobile-details">
              <div className="col-10">
                <p>363 Sembawang Road Goodlink Park</p>
                <p>{`${this.state.search.pickUpDate}, ${this.state.search.pickUpTime} - ${this.state.search.dropOffDate}, ${this.state.search.dropOffTime}`}</p>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center" onClick={() => this.handleOpen("search")}>
                <i className="far fa-edit" />
              </div>
            </div>
            <div className="search-mobile">
              <Modal
                show={ this.state.showSearchModal }
                onHide={ () => this.handleClose("search") }
                dialogClassName="search-mobile-modal"
              > 
                <Modal.Header closeButton>
                  <Modal.Title>
                    <p>363 Sembawang Road Goodlink Park</p>
                    <p>{`${this.state.search.pickUpDate}, ${this.state.search.pickUpTime} - ${this.state.search.dropOffDate}, ${this.state.search.dropOffTime}`}</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VehicleSearch />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={ () => this.handleClose("search") } variant="outline-secondary">
                    Close 
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
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
            <Button onClick={ () => this.handleOpen("filter") } variant="secondary">
              <i className="fas fa-filter" /> Filter
            </Button>
          </div>
          <div className="mobile-filter">
            <Modal
              show={ this.state.showFilterModal }
              onHide={ () => this.handleClose("filter") }
              dialogClassName="mobile-filter-modal"
            > 
              <Modal.Header closeButton>
                <Modal.Title>Filters</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SearchFilterMobile 
                  type={ this.state.filter.type }
                  carsCategory={ this.state.filter.carsCategory }
                  commercialCategory={ this.state.filter.commercialCategory }
                  onTypeChange={ this.handleTypeChange }
                  onCategoryChange={ this.handleCategoryChange }
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={ () => this.handleClose("filter") }>
                  Apply
                </Button>
                <Button onClick={ () => this.handleClose("filter") } variant="outline-secondary">
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