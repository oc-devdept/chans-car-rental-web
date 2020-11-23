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
			toggleState: "Hide",
			toggleIcon: "fas fa-angle-up"
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
		const carCategories = CarCategories.data;
		const commercialCategories = CommercialCategories.data;

		return(
			<>
				<Button 
					className="filter-toggle" 
					onClick={ this.handleClick } 
					block
				>
					{console.log(CarCategories)}
					{ this.state.toggleState } Categories&nbsp;
					<i className={ this.state.toggleIcon }></i>
				</Button>
				<Collapse isOpened={ this.state.isOpened }>
					<ul>
						{/* <Link href="/vehicles/[vehicleType]" as="/vehicles/cars">
							<li className="filter-family">CARS</li>
						</Link> */}
						{ carCategories.map(( item, id ) => {
								return(
									<Link 
										href="/vehicles/cars/[vehicleCategory]" 
										as={`/vehicles/cars/${item.catName.replace(/\s+/g, '-').toLowerCase()}`}
										key={id}
									>
										<li className="filter-category">
											{ item.catName }
											<i className="fas fa-chevron-right"></i>
										</li>
									</Link>
								)
							})	
						}
						<Link href="/vehicles/[vehicleType]" as="/vehicles/commercial">
							<li className="filter-family">COMMERCIAL</li>
						</Link>
						{ commercialCategories.map(( item, id ) => {
								return(
									<Link 
										href="/vehicles/commercial/[vehicleCategory]" 
										as={`/vehicles/commercial/${item.catName.replace(/\s+/g, '-').toLowerCase()}`}
										key={id}
									>
										<li className="filter-category">
											{ item.catName }
											<i className="fas fa-chevron-right"></i>
										</li>
									</Link>
								)
							})	
						}
					</ul>
				</Collapse>
			</>
		)
	}
}

export default Filter