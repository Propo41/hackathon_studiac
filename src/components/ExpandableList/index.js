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

  jobContainer: {
    paddingLeft: "0px",
  },
}));

/**
 * @param  {String} id
 * @param  {List} lessons a list containing {name, duration}
 * @param  {String} title
 * @param  {String} type can be FAQ or Syllabus
 * @param  {String} body applicable only for FAQ
 */
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
      <AccordionDetails>
        {props.type === "FAQ" ? (
          <TableList contentType={props.type} body={props.body} />
        ) : (
          <TableList lessons={props.lessons} contentType={props.type} />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandableList;
