import React, { Component } from "react";
import { connect } from "react-redux";
import StepZilla from "react-stepzilla";
// page
import Search from "./search"
import SearchExtra from "./search-extras"
import CustomerDetails from "./customerdetails"
import Payment from "./payment"
import Summary from "./summary"

import Default from "Components/Layout/PageTemplates/Default";

class Process extends Component {

    constructor(props) {
        super(props);
    
        this.state = { showSteps: true };
        this.onStepChange = this.onStepChange.bind(this);
    }

    onStepChange(step) {
        step === 4 && this.setState({ showSteps: false });
    }

    render() {
        const steps =
        [
            {name: 'Step 1', component: <Search />},
            {name: 'Step 2', component: <SearchExtra />},
            {name: 'Step 3', component: <CustomerDetails />},
            {name: 'Step 4', component: <Summary />}
        ];

        return (
            <Default crumbs="Car Configuration">
            <section className="configure-area pb-60">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="step-process">
                      <StepZilla
                        steps={steps}
                        nextTextOnFinalActionStep="Summary"
                        prevBtnOnLastStep={false}
                        onStepChange={this.onStepChange}
                        showSteps={this.state.showSteps}
                        stepsNavigation={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Default>
        );
    }
}

const mapStateToProps = state => {
    const { ProductState, CheckoutState } = state;
    return { ProductState, CheckoutState };
};

export default connect(mapStateToProps, {
    
  })(Process);