import React, { Component } from "react"
import Form from 'react-bootstrap/Form'
import { IconButton } from '@material-ui/core';
import { List , GridOn } from '@material-ui/icons';

// todo: implement state
// https://www.robinwieruch.de/react-function-component#react-function-component-state
class SearchSortbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return(
      <div className="search-sortbar border d-flex align-items-center" style={{height: 50}}>
        <div className="search-no-of-results mr-auto pl-3">
          <p style={{color: "#404040", fontWeight: 600}}>Showing { this.props.noOfResults } Results</p>
        </div>
        <div className="search-display-style">
          <IconButton>
            <List />
          </IconButton>
          <IconButton>
            <GridOn />
          </IconButton>
        </div>
        <div className="search-sort px-3">
          <Form.Group controlId="search-sort-select" style={{margin: 0}}>
            <Form.Label srOnly="true">Sort by</Form.Label>
            <Form.Control 
              as="select" 
              style={{
                height: 30, 
                backgroundColor: "#ffffff", 
                border: "1px solid #dee2e6", 
                paddingLeft: 5,
              }}
            >
              <option disabled selected hidden>Sort by:</option>
              <option value="price-ascending">Sort by: Price - Low to High</option>
              <option value="price-descending">Sort by: Price - High to Low</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default SearchSortbar