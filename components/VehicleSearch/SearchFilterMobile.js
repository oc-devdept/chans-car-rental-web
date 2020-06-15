import React, { Component } from "react"
import { Button, Form } from "react-bootstrap"
import { Accordion, Card } from "react-bootstrap"

import "../../assets/styles/search-filter.css";

class SearchFilterMobile extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeKey: "0"
    }

    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }
  
  handleTypeChange(type) {
    // type === "cars" ? this.setState({activeKey:"0"}) : this.setState({activeKey:"1"})
    return this.props.handleTypeChange(type)
    // this.props.handleTypeChange(type);
  }

  handleCategoryChange(event) {
  //   const { id, checked } = event.target
  //   const { type } = this.props
  //   return this.props.handleCategoryChange(type, id, checked)

    const { id, checked } = event.target;
    const { selected } = this.props.filter;
    this.props.handleCategoryChange(selected, id, checked);
  }

  render() {
    return(
      <div className="search-filter-mobile">
        <div className="search-filter-mobile-type">
          <legend> Vehicle Category</legend>
          {!!Object.keys(this.props.filter).length &&
            Object.keys(this.props.filter.categoryData).map((category, id) => (
              <Button
                key={id}
                onClick={() => this.handleTypeChange(category)}
                variant={
                  this.props.filter.selected === category ? "primary" : "light"
                }
              >
                {category}
              </Button>
            ))}
        </div>
        <div className="search-filter-mobile-categories">
          {!!Object.keys(this.props.filter).length &&
            Object.entries(
              this.props.filter.categoryData[this.props.filter.selected]
            ).map(([key, value], id) => (
              <Form.Check
                custom
                key={id}
                id={key}
                checked={value}
                label={key}
                onChange={this.handleChange}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default SearchFilterMobile