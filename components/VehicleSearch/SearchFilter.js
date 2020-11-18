import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "../../assets/styles/search-filter.css";

class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(type) {
    this.props.handleTypeChange(type);
  }

  handleChange(event) {
    const { id, checked } = event.target;
    const { selected } = this.props.filter;
    this.props.handleCategoryChange(selected, id, checked);
  }

  render() {
    return (
      <div className="search-filter">
        <div className="search-filter-type">
          {!!Object.keys(this.props.filter).length &&
            Object.keys(this.props.filter.categoryData).map((category, id) => (
              <Button
                key={id}
                onClick={() => this.handleClick(category)}
                variant={
                  this.props.filter.selected === category ? "primary" : "light"
                }
              >
                {category}
              </Button>
            ))}
        </div>
        <legend>Vehicle Category</legend>
        <div className="search-filter-categories">
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
    );
  }
}

export default SearchFilter;
