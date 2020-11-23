import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/VehicleSearch/VehicleSearch";
import VehicleSearchMobile from "Components/VehicleSearch/VehicleSearchMobile";
import SearchSortbar from "Components/VehicleSearch/SearchSortbar";
import SearchFilter from "Components/VehicleSearch/SearchFilter";
import SearchList from "Components/VehicleSearch/SearchList";
import SearchFilterMobile from "Components/VehicleSearch/SearchFilterMobile";
import { Button, Modal } from "react-bootstrap";
import "Styles/search.css";

import {
  getCategories,
  getSearch,
  updateSelectedVehicle,
} from "Ducks/rent/RentActions";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchModal: false,
      showFilterModal: false,
      filter: {},
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.RentState.SearchParameters).length === 0) {
      //Router.replace("/");
    } else {
      this.props.getCategories();
    }
  }

  componentDidUpdate(prevProps) {
    // Pull category data from redux and populates local state for state
    if (this.props.RentState.Categories !== prevProps.RentState.Categories) {
      const data = this.props.RentState.Categories;
      let initState = { selected: null, categoryData: {} };
      Object.values(data).map((category) => {
        initState.categoryData[category.name] = {};
        category.data.forEach((subcategory) => {
          initState.categoryData[category.name][subcategory.catName] = false;
        });
      });
      initState.selected = Object.keys(initState.categoryData)[0];
      this.setState({
        ...this.state,
        filter: initState,
      });
    }
  }

  handleTypeChange(type) {
    this.setState({
      ...this.state,
      filter: { ...this.state.filter, selected: type },
    });
  }

  handleCategoryChange(selected, id, checked) {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        categoryData: {
          ...this.state.filter.categoryData,
          [selected]: {
            ...this.state.filter.categoryData[selected],
            [id]: checked,
          },
        },
      },
    });
  }

  handleOpen(type) {
    switch (type) {
      case "filter":
        this.setState({
          ...this.state,
          showFilterModal: true,
        });
        break;
      case "search":
        this.setState({
          ...this.state,
          showSearchModal: true,
        });
        break;
      default:
        this.setState(this.state);
        break;
    }
  }

  handleClose(type) {
    switch (type) {
      case "filter":
        this.setState({
          ...this.state,
          showFilterModal: false,
        });
        break;
      case "search":
        this.setState({
          ...this.state,
          showSearchModal: false,
        });
        break;
      default:
        this.setState(this.state);
        break;
    }
  }

  render() {
    // console.log(this.state);
    // console.log(this.props)
    // console.log(CarCategories)
    // console.log("props= ", this.props);
    // console.log("state= ", this.state);
    return (
      <Default crumbs="Search">
        <div className="search-page">
          <div className="container mb-3">
            <VehicleSearchMobile
              searchParameters={this.props.RentState.SearchParameters}
              getSearch={this.props.getSearch}
            />
            <VehicleSearch
              searchParameters={this.props.RentState.SearchParameters}
              getSearch={this.props.getSearch}
            />
          </div>
          <div className="container mb-3">
            <SearchSortbar noOfResults="3" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <SearchList  searchParameters={this.props.RentState.SearchParameters}/>
              </div>
              <div className="col-lg-3">
                <SearchFilter
                  filter={this.state.filter}
                  handleTypeChange={this.handleTypeChange}
                  handleCategoryChange={this.handleCategoryChange}
                />
              </div>
            </div>
          </div>
          <div className="mobile-filter-toggle">
            <Button
              onClick={() => this.handleOpen("filter")}
              variant="secondary"
            >
              <i className="fas fa-filter" /> Filter
            </Button>
          </div>
          <div className="mobile-filter">
            <Modal
              show={this.state.showFilterModal}
              onHide={() => this.handleClose("filter")}
              dialogClassName="mobile-filter-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Filters</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SearchFilterMobile
                  filter={this.state.filter}
                  type={this.state.filter.type}
                  carsCategory={this.state.filter.carsCategory}
                  commercialCategory={this.state.filter.commercialCategory}
                  handleTypeChange={this.handleTypeChange}
                  handleCategoryChange={this.handleCategoryChange}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.handleClose("filter")}
                  variant="outline-secondary"
                >
                  Reset
                </Button>
                <Button onClick={() => this.handleClose("filter")}>
                  Apply
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Default>
    );
  }
}

const mapStateToProps = (state) => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, {
  getCategories,
  getSearch,
  updateSelectedVehicle,
})(Search);
