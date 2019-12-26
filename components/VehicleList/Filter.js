import React, { Component } from "react"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import { Collapse } from "react-collapse"
import "../../assets/styles/filter.css"

import CarCategories from "../../data/car-categories.json"
import CommercialCategories from "../../data/commercial-categories.json"

class Filter extends Component {
	constructor(props){
		super(props)
		this.state = { 
			isOpened: true,
			toggleState: "Show",
			toggleIcon: "fas fa-angle-down"
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({ 
			toggleState: this.state.isOpened ? "Show" : "Hide",
			toggleIcon: this.state.isOpened ? "fas fa-angle-down" : "fas fa-angle-up",
			isOpened: !this.state.isOpened,
		})
	}
	
	render() {
		const carCategories = CarCategories.carCategories
		const commercialCategories = CommercialCategories.commercialCategories

		return(
			<div className="vehicles-filter col-md-3 p-0">
				<Button 
					className="filter-toggle" 
					onClick={ this.handleClick } 
					block
				>
					{ this.state.toggleState } Filters&nbsp;
					<i class={ this.state.toggleIcon }></i>
				</Button>
				<Collapse isOpened={ this.state.isOpened }>
					<ul>
						<li className="filter-family">CARS</li>
						{ carCategories.map(( item, id ) => {
								return(
									<li key={ id } className="filter-category">
										{ item.catName }
										<i className="fas fa-chevron-right"></i>
									</li>
								)
							})	
						}
						<li className="filter-family">COMMERCIAL</li>
						{ commercialCategories.map(( item, id ) => {
								return(
									<li key={ id } className="filter-category">
										{ item.catName }
										<i className="fas fa-chevron-right"></i>
									</li>
								)
							})	
						}
					</ul>
				</Collapse>
			</div>
		)
	}
}

export default Filter