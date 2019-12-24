import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb"
import fetch from "isomorphic-unfetch"

import Filter from "Components/VehicleList/Filter"

// /vehicles/[vehicleType]/[vehicleCategory]
class Vehicles extends Component {
  constructor(props){
		super(props)
		this.state = { 

		}
	}

	// static async getInitialProps({ req }) {
	// 	const res = await fetch("http://localhost:3001/vehicle-list")
	// 	const json = await res.json()
	// 	console.log(json)
	// 	return { json }
	// }

	// componentDidMount() {
	// 	fetch("http://localhost:3001/vehicle-list")
	// 		.then(response => response.json())
	// 		.then(result => this.setState({ data: result }))

	// 		console.log(this.state.data)
	// }

	render() {
		return(
			<Default>
				<div className="container">
					<h1>dynamic header here</h1>
					<Breadcrumb title="pending dynamic breadcrumb"/>
				</div>
				<div className="container">
					<Filter />
					<div className="vehicles-results">

					</div>
				</div>
			</Default>
		)
	}
}

export default Vehicles