import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

// Page Layout
import Default from "Components/Layout/PageTemplates/Default";

import CtaIndex from "Components/CallToAction/CtaIndex"
import "../assets/styles/index.css"

// Is there a better place to put this?
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

class Index extends Component {
	render() {
		return (
			<Default>
				<div className="jumbotron d-flex justify-content-center index-hero">
					<div className="align-self-center">
						<h1 className="text-center text-white">RENT A CAR NOW!</h1>
						<p className="h5 text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="container border">
					<h2>Search for your ideal car</h2>
					{/* Work in progress */}
					<Form>
						<Form.Row>
							<Col>
								<Form.Group controlId="0">
									<Form.Label>Pick-up / Drop-off Location:</Form.Label>
									<Form.Control 
										type="text" 
										placeholder="363 Sembawang Road, Goodlink Park"
										disabled={true}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="1">
									<Form.Label>Pick-up Date:</Form.Label>
									<Form.Control 
										type="date" 
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="2">
									<Form.Label>Drop-off Date:</Form.Label>
									<Form.Control 
										type="date" 
									/>
								</Form.Group>
							</Col>
							<Col>
								<Button type="submit">Search</Button>
							</Col>
						</Form.Row>
					</Form>
				</div>
				<div className="container border mb-4">
					<div className="row">
						<div className="col-lg-6 col-md-12 p-5 text-justify">
							<h2>Service is Our First Priority</h2>
							<h2>At <img /></h2>
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
								className=""
							/>
						</div>
					</div>
				</div>
				<div className="container border mb-4">
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
				<div className="jumbotron">
					<CtaIndex />
				</div>
			</Default>
		)
	}
}

export default Index;
