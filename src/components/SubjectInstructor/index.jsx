import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Label from "../Label";
import Dropdown from "../Dropdown";

const useStyles = makeStyles({
  root: {
    width: 150,
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    // todo: add hover effect later
    /*   "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s ease-in-out",
    }, */
  },
  cardContent: {
    paddingTop: 10,
    paddingLeft: 0,
  },
  cardActions: {
    paddingLeft: 0,
  },
});

/**
 * @param {Object} title
 * @param {String} body
 * @param {String} category [it takes values such as class 1 or class 2]
 * @param {String} image
 * @param {String} labelColor
 */
export default function SubjectInstructor(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt={props.title}
        height="80"
        image={props.image}
        title={props.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
