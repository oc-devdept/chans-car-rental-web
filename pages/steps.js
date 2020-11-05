import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Default from "Components/Layout/PageTemplates/Default";
// page
import Search from "./search"
import SearchExtra from "./search-extras"
import CustomerDetails from "./customerdetails"
import Payment from "./payment"
import Summary from "./summary"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepIcon: {
    color: "#F08080 !important"
  },
  icon: {
    color: "#B22222 !important",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#B22222 !important",
    '&:hover': {
      backgroundColor: "#F08080 !important",
    },
  },
}))(Button);

function getSteps() {
  return ['Vehicle Selection', 'Search Extras', 'Driver Details', 'Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Search />;
    case 1:
      return <SearchExtra />;
    case 2:
      return <CustomerDetails />;
    case 3:
    return <Payment />;
    // case 4:
    // return <Summary />;
    default:
      return '';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Default>

    <div className={classes.root}>
    <div className="container">
      <Stepper activeStep={activeStep} classes={{
            root: classes.root
          }}>
        {steps.map((label, index) => {
          // const stepProps = [{
            
          //   name: "Grade",
          //   component: (
          //     <Search/>
          //   )
          // }];
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconProps={{
                    classes: { root: classes.stepIcon, active: classes.icon, completed: classes.icon }
                  }}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography> */}
            {/* <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
            <Summary/>
          </div>
        ) : (
          <div className="container">
            <div align="center">
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <ColorButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
              </ColorButton>
            </div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            
          </div>
        )}
      </div>
    </div>
    </Default>
  );
  
}