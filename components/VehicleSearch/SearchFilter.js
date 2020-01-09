import React, { Component } from "react"
import { Button, Form } from "react-bootstrap"

import CarCategories from "../../data/car-categories.json"
import CommercialCategories from "../../data/commercial-categories.json"
import "../../assets/styles/search-filter.css"

class SearchFilter extends Component {
  constructor(props){
    super(props)
    
    const { carCategories } = CarCategories
    const { commercialCategories } = CommercialCategories

    this.state = {
      type: "cars",
      carsCategory: { },
      commercialCategory: { }      
    }

    carCategories.forEach( item => {
      this.state.carsCategory[item.catName] = false
    })
    commercialCategories.forEach( item => {
      this.state.commercialCategory[item.catName] = false
    })

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(type) {
    type === "cars" ? 
      this.setState({type: "cars"}) : 
      this.setState({type: "commercial"})
  }

  handleChange(event) {
    let { id, checked } = event.target
    let { type } = this.state

    switch (type) {
      case "cars":
        this.setState({
          carsCategory: {
            ...this.state.carsCategory,
            [id]: checked
          }
        })
        break
      case "commercial":
        this.setState({
          commercialCategory: {
            ...this.state.commercialCategory,
            [id]: checked
          }
        })
        break
      default:
        break
    }
  }

  render(){
    console.log(this.state)
    return(
      <div className="search-filter">
        <div className="search-filter-type">
          <Button 
            onClick={ () => this.handleClick("cars") }
            variant={ this.state.type == "cars" ? "primary" : "outline-primary"}
          >
            Cars
          </Button>
          <Button 
            onClick={ () => this.handleClick("commercial") }
            variant={ this.state.type == "commercial" ? "primary" : "outline-primary"}
          >
            Commercial
          </Button>
        </div>
        <legend>
          Vehicle Category
        </legend>
        <div className="search-filter-categories">
          { this.state.type === "cars" ? 
            Object.keys(this.state.carsCategory).map(( item, id ) => (
              <Form.Check 
                custom
                key={ id }
                id={ item } 
                checked={ this.state.carsCategory[item] }
                label={ item }
                onChange={ this.handleChange }
              />
            )) :
            Object.keys(this.state.commercialCategory).map(( item, id ) => (
              <Form.Check 
                custom
                key={ id }
                id={ item }
                checked={ this.state.commercialCategory[item] }
                label={ item }
                onChange={ this.handleChange }
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default SearchFilter