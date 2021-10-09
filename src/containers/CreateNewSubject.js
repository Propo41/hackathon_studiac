import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Stack,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
} from "@material-ui/core";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
// components
import AddChaptersForm from "../components/CreateNewSubjectForm/AddChaptersForm";
import AddContributorForm from "../components/CreateNewSubjectForm/AddContributorForm";
import ConfirmSubjectForm from "../components/CreateNewSubjectForm/ConfirmSubjectForm";

import { DELETE_AUTH, GET, GET_AUTH } from "../api/api";

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    width: "10%",
  },
}));

function getSteps() {
  return [
    "Add Chapters",
    "Add Subject Contributors",
    "Confirm Subject Creation",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddChaptersForm />;
    case 1:
      return <AddContributorForm />;
    case 2:
      return <ConfirmSubjectForm />;
    default:
      return "unknown step";
  }
}

export default function CreateNewSubject(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: {},
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    // if (activeStep == steps.length - 1) {
    //   fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((data) => data.json())
    //     .then((res) => {
    //       console.log(res);
    //       setActiveStep(activeStep + 1);
    //     });
    // } else {
    //   setActiveStep(activeStep + 1);
    // }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // -----------------------------------------------------

  if (loading) {
    return <h>Loading</h>;
  }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
            <div style={{ display: "flex", padding: "0 2.5rem" }}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                fullWidth={true}
              >
                Back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={activeStep === 2}
                // onClick={handleNext}
                type="submit"
                style={{ marginLeft: "auto" }}
                fullWidth={true}
              >
                Next
              </Button>
            </div>
          </form>
        </FormProvider>
      </>
    </div>
  );
}
