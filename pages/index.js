import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";

import CtaIndex from "Components/CallToAction/CtaIndex"
import VehicleSearch from "Components/VehicleSearch/VehicleSearch";
import "../assets/styles/index.css"

class Index extends Component {
	render() {
		const whyUsInfo = [
			{
				icon: "fas fa-car",
				title: "Modern Fleet",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
			{
				icon: "fas fa-wallet",
				title: "Competitive Prices",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
			{
				icon: "fas fa-life-ring",
				title: "Full Insurance Plan",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
			{
				icon: "fas fa-road",
				title: "Unlimited Milage",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
			{
				icon: "fas fa-thumbs-up",
				title: "Exceptional Service",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
			{
				icon: "fas fa-wrench",
				title: "Breakdown Assistance",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`
			},
		]
		
		return (
			<Default>
				<div className="jumbotron index-hero justify-content-center ">
					<div className="align-self-lg-center align-self-md-start">
						<h1 className="text-center text-white">
							RENT A CAR NOW!
						</h1>
						<p className="h5 text-center text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className="container index-search position-relative d-flex flex-column 
					justify-content-center px-4 mb-4"
				>
					<h2 className="my-3" style={{fontWeight: 600}}>
						Search for your ideal car
					</h2>
					<VehicleSearch />
				</div>
				<div className="container index-about-us border mb-4">
					<div className="row">
						<div className="col-lg-6 col-md-12 p-5 text-justify">
							<h2>Service is Our First Priority</h2>
							<h2>
								At <img src="Images/chans-logo.png" alt="chan's" height="30"/>
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Mauris pretium nulla lacinia nisl aliquam dictum ac sit 
								amet nulla. Cras blandit nisl vitae nibh fringilla euismod. 
								Nullam ac tincidunt neque. Vestibulum convallis, dui id 
								facilisis lacinia, nunc turpis convallis nisl, sed euismod 
								turpis velit in justo. Mauris arcu dui, laoreet quis enim 
								sed, pharetra posuere mi. Fusce at erat elit. Morbi metus 
								nibh, placerat vitae auctor a, tincidunt vitae sapien. Nam 
								ac volutpat ligula.</p>
						</div>
						<div className="col-lg-6 col-md-12 p-5 text-center">
							<img 
								src="Images/index-office.jpg" 
								alt="Chan's Car Rental"
							/>
						</div>
					</div>
				</div>
				<div className="container index-why-us border mb-4">
					<h2 className="text-center py-4">Why Choose Us?</h2>
					<div className="row pb-4">
						{whyUsInfo.map((item, id) => (
							<div className="col-lg-4 col-md-6 d-flex mb-3" key={id}>
								<i 
									className={item.icon} 
									style={{
										fontSize: 24,
										margin: "5px 20px 0px",
										color: "#B72C2E"
									}} 
								/>
								<div className="flex-column">
									<h5>{item.title}</h5>
									<p className="text-justify">{item.text}</p>
								</div>	
							</div>
						))}
					</div>
				</div>
				<div className="jumbotron index-cta">
					<CtaIndex />
				</div>
			</Default>
		)
	}
}

export default Index;
