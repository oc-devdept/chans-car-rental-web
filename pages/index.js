import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { getAllLead } from "ducks/lead";

import Navbar from "components/Layout/Navbar";
// import Banner from "../components/shop-style-one/Banner";
// import OfferArea from "../components/shop-style-one/OfferArea";
// import Products from "../components/shop-style-one/Products";
// import CategoryProducts from "../components/shop-style-one/CategoryProducts";
// import TrendingProducts from "../components/shop-style-one/TrendingProducts";
// import BestSeller from "../components/shop-style-one/BestSellers";
// import Facility from "../components/shop-style-one/Facility";
// import Testimonials from "../components/Common/Testimonials";
// import News from "../components/Common/News";
// import Subscribe from "../components/Common/Subscribe";
// import Partner from "../components/Common/Partner";
// import InstagramPhoto from "../components/Common/InstagramPhoto";
// import Footer from "../components/Layout/Footer";
// import AddsModal from "../components/Modal/AddsModal";

class Index extends Component {
  componentDidMount() {
    this.props.getAllLead();
  }
  render() {
    console.log(this.props.leadList);
    return (
      <React.Fragment>
        <Navbar />
        {/* <Banner />
                <OfferArea />
                <Products />
                <CategoryProducts />
                <TrendingProducts />
                <BestSeller />
                <Facility />
                <Testimonials />
                <News />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer />
                <AddsModal /> */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ leadState }) => {
  const { leadList } = leadState;
  return { leadList };
};

export default connect(mapStateToProps, { getAllLead })(Index);
