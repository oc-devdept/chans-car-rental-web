import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import CtaIndex from "Components/CallToAction/CtaIndex";
import VehicleSearch from "Components/VehicleSearch/VehicleSearch";
import "Styles/index.css";

import { getSearch } from "Ducks/rent/RentActions";

const Index = () => {
  const dispatch = useDispatch();
  const { SearchParameters } = useSelector((state) => state.RentState);
  const getSearchAction = useCallback(payload => dispatch(getSearch(payload)), [dispatch])
  const whyUsInfo = [
    {
      icon: "fas fa-car",
      title: "Modern Fleet",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
    {
      icon: "fas fa-wallet",
      title: "Competitive Prices",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
    {
      icon: "fas fa-life-ring",
      title: "Full Insurance Plan",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
    {
      icon: "fas fa-road",
      title: "Unlimited Milage",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Exceptional Service",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
    {
      icon: "fas fa-wrench",
      title: "Breakdown Assistance",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
				amet nulla.`,
    },
  ];

  const ourSvcInfo = [
    {
      icon: <i class="fas fa-users"></i>,
      title: "Personal Rental",
      html: (
        <p>
          <span>
            Choose from a wide variety of cars for any of your personal needs.
            Cars may also be driven into Malaysia* for a short weekend getaway.
          </span>
          <span>*Terms and Conditions apply</span>
        </p>
      ),
    },
    {
      icon: <i class="fas fa-building"></i>,
      title: "Corporate Rental",
      html: (
        <p>
          We offer a competitive pricing for businesses to rent our vehicles.
          Your organisation will have the flexiblity to choose from either
          short-term or long-term packages.{" "}
          <Link href="/contact-us">
            <a>Contact us</a>
          </Link>{" "}
          directly for more information.
        </p>
      ),
    },
    {
      icon: <i class="fas fa-truck"></i>,
      title: "Commercial Vehicles",
      html: (
        <p>
          Transporting people or goods? Our fleet of vans and trucks are well
          equipped with the necessary tools to assist you in fulfilling your
          requirements.
        </p>
      ),
    },
  ];

  return (
    <Default>
      <div
        className="container d-flex flex-column
					justify-content-center mb-4 searchCar"
      >
        <VehicleSearch getSearch={getSearchAction} searchParameters={SearchParameters} />
      </div>
      <div className="container index-hero jumbotron d-flex flex-column justify-content-center align-items-center">
        <h1
          className="text-center text-white px-4 py-3"
          style={{ backgroundColor: "rgba(1, 103, 141, 0.5)" }}
        >
          CAR RENTAL MADE SIMPLE
        </h1>
        <p
          className="h5 text-center text-white p-4"
          style={{ backgroundColor: "rgba(1, 103, 141, 0.5)" }}
        >
          Expect{" "}
          <strong>
            <em>exceptional customer service</em>
          </strong>{" "}
          with any rental from us
        </p>
      </div>
      <div className="container index-about-us border mb-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 p-5 text-justify">
            <h2>Service is Our First Priority</h2>
            <h2>
              At <img src="Images/chans-logo.png" alt="chan's" height="30" />
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              pretium nulla lacinia nisl aliquam dictum ac sit amet nulla. Cras
              blandit nisl vitae nibh fringilla euismod. Nullam ac tincidunt
              neque. Vestibulum convallis, dui id facilisis lacinia, nunc turpis
              convallis nisl, sed euismod turpis velit in justo. Mauris arcu
              dui, laoreet quis enim sed, pharetra posuere mi. Fusce at erat
              elit. Morbi metus nibh, placerat vitae auctor a, tincidunt vitae
              sapien. Nam ac volutpat ligula.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 p-5 text-center">
            <img src="Images/index-office.jpg" alt="Chan's Car Rental" />
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
                  color: "#B72C2E",
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
  );
};

export default Index;
