import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { CardActions } from "@material-ui/core";
import Label from "../Label";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingTop: 0,
  },
  media:{
    borderBottomLeftRadius: "inherit"
  }
}));

/**
 * @param  {String} title
 * @param  {String} body
 * @param  {String} image
 * @param  {String} category
 * @param  {String} labelColor
 */
export default function SubjectFeatured(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt={props.title}
        height="150"
        image={props.image}
        title={props.title}
        className={classes.media}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {/* slice props.body to 40 chars */}
            {props.body.slice(0, 60)}...
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
