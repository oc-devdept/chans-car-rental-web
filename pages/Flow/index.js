import React, { Component } from "react";
import Helmet from "Components/Helmet";
import { connect } from "react-redux";
import moment from "moment";

// Stepper
import { ArrowBack } from "@material-ui/icons";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  IconButton
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// form components
import SetupForm from "./Setup";
import TemplateForm from "./Template";
import MailingListForm from "./MailingList";
import SummaryForm from "./Summary";

const styles = {
    root: {
      background: "none",
      border: "none"
    }
  };
class steps extends Component {

render() {
return [
    {
      label: "Setup",
      component: (
        <SetupForm
          onChange={this.onSetupChange}
          data={this.state.campaignForm.setup}
        />
      )
    },
    {
      label: "Template",
      component: (
        <TemplateForm
          onChange={this.onTemplateChange}
          data={this.state.campaignForm.template}
        />
      )
    },
    {
      label: "Mailing List",
      component: (
        <MailingListForm
          onChange={this.onMailingListChange}
          data={this.state.campaignForm.mailingList}
        />
      )
    },
    {
      label: "Summary",
      component: (
        <SummaryForm
          onChange={this.onSummaryChange}
          data={this.state.campaignForm}
          goToStep={this.goToStep}
        />
      )
    }
  ];
}
}