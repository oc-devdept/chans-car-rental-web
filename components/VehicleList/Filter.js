import React from "react"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import { Collapse } from "react-collapse"
import "../../assets/styles/filter.css"

import CarCategories from "../../data/car-categories.json"
import CommercialCategories from "../../data/commercial-categories.json"

const Filter = () => {
	const carCategories = CarCategories.carCategories
	const commercialCategories = CommercialCategories.commercialCategories

	return(
		<div className="vehicles-filter col-md-3 p-0">
			{/* need to control isOpened with state */}
			<Collapse isOpened={true}>
				<Button block>Open Filters</Button>
			</Collapse>
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
		</div>
	)
}

export default Filter