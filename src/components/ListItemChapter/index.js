import React from "react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Typography,
  Button,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

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
  list: {
    backgroundColor: "var(--ash)",
    padding: "1rem 2rem",
    borderRadius: 10,
  },
  listItem: {
    backgroundColor: "var(--lightash)",
    padding: "1rem",
    borderRadius: 10,
    margin: "1rem 0",
  },
}));

const ListItemChapter = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      {/* name */}
      <p
        style={{
          fontFamily: "var(--font-family-sen)",
          margin: "0 1rem 0 0",
          lineHeight: "1.5",
          fontize: "1rem",
        }}
      >
        {`${props.chapter.number}.`}
      </p>
      <ListItemText primary={props.chapter.title} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          // onClick={onClickDelete}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemChapter;
