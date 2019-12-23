import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import Breadcrumb from "Components/Common/Breadcrumb"

// /vehicles/[vehicleType]/[vehicleCategory]
class Vehicles extends Component {
  constructor(props){
		super(props)
		this.state = { 
			data: "hello"
		}
	}

	// static async getInitialProps({ req }) {
	// 	const res = await fetch("/data/vehicle-list.json")
	// 	const json = await res.json()
	// 	console.log(json)
	// 	return json
	// }
	
	// componentDidMount() {
	// 	fetch("http://localhost:3001/vehicle-list")
	// 		.then(response => response.json())
	// 		.then(data => this.setState({ data: data }))

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
					<div className="vehicles-filter">vehicle filter here</div>
					<div className="vehicles-results">
						{this.state.data}
					</div>
				</div>
			</Default>
		)
	}
}

export default Vehicles