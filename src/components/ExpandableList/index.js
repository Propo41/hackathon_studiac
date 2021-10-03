import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlagIcon from "@material-ui/icons/Flag";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

import TableList from "../TableList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightash2,
    borderRadius: theme.shape.borderRadius,
    "&::before": {
      height: "0px",
    },
  },
  syllabus: {
    paddingLeft: theme.spacing(5),
  },
  dropdownIcon: {
    paddingRight: theme.spacing(5),
    display: "flex",
    justifyContent: "flex-end",
  },
  flex: {
    display: "flex",
    paddingLeft: theme.spacing(5),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  disabledButton: {
    backgroundColor: "var(--light-purple)",
    color: "white",
  },
  enabledButton: {
    backgroundColor: "var(--purple)",
    color: "white",
    marginLeft: "10px",
  },

  jobContainer: {
    paddingLeft: "0px",
  },
}));

const ExpandableList = (props) => {
  const classes = useStyles();

  return (
    <Accordion
      className={classes.root}
      onClick={() => {
        console.log(props.id);
      }}
      elevation={0}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ padding: "8px" }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
          className={classes.syllabus}
        >
          {props.title}
        </Typography>
      </AccordionSummary>
      {props.expandable && (
        <AccordionDetails>
          <TableList lessons={props.lessons} />
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default ExpandableList;
