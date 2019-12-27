import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb"
import fetch from "isomorphic-unfetch"
import "../assets/styles/vehicles.css"

import Filter from "Components/VehicleList/Filter"
import VehicleList from "Components/VehicleList/VehicleList"
import CtaCarlist from "Components/CallToAction/CtaCarlist"

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
					<div className="row">
						<div className="vehicles-filter col-md-3">
							<Filter />
						</div>
						<div className="vehicles-results col-md-9">
							<VehicleList />
						</div>
					</div>
				</div>
				<div className="jumbotron vehicles-cta">
					<CtaCarlist />
				</div>
			</Default>
		)
	}
}

export default Vehicles