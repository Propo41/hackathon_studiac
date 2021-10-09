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

const useStyles = makeStyles((theme) => ({
  buttonPurple: {
    backgroundColor: "var(--light-purple)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    marginRight: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
  buttonOrange: {
    backgroundColor: "var(--orange-light)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    marginRight: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
}));

const ConfirmSubjectForm = (props) => {
  const classes = useStyles();
  const { control } = useFormContext();
  return (
    <Card component="form" className="rounded-card">
      <div style={{ padding: "1rem 8rem" }}>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.buttonOrange}
          onClick={props.onSubmitClick}
        >
          COMPLETE CREATING THE SUBJECT
        </Button>
      </div>
    </Card>
  );
};

export default ConfirmSubjectForm;
