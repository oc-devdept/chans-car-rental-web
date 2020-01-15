import React, { Component } from "react"
import { Button, Form } from "react-bootstrap"
import { Accordion, Card } from "react-bootstrap"

class SearchFilterMobile extends Component {
  constructor(props){
    super(props)

    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }
  
  handleTypeChange(type) {
    return this.props.onTypeChange(type)
  }

  handleCategoryChange(event) {
    const { id, checked } = event.target
    const { type } = this.props
    return this.props.onCategoryChange(type, id, checked)
  }

  render() {
    return(
      <div className="search-filter-mobile">
        <div className="search-filter-mobile-type">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle 
                as={Card.Header} 
                eventKey="0" 
                // onClick={ this.handleTypeChange("cars") }
              >
                Cars
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  { Object.keys(this.props.carsCategory).map(( item, id ) => (
                    <Form.Check
                      custom
                      key={ id }
                      id={ item }
                      checked={ this.props.carsCategory[item] }
                      label={ item }
                      onChange={ this.handleCategoryChange }
                    />
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle 
                as={Card.Header} 
                eventKey="1" 
                // onClick={ this.handleTypeChange("commercial") }
              >
                Commercial
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  { Object.keys(this.props.commercialCategory).map(( item, id ) => (
                    <Form.Check
                      custom
                      key={ id }
                      id={ item }
                      checked={ this.props.commercialCategory[item] }
                      label={ item }
                      onChange={ this.handleCategoryChange }
                    />
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

export default SearchFilterMobile