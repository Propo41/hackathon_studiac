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
    minWidth: theme.spacing(40),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 120,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  label: {
    paddingLeft: theme.spacing(1),
  },
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
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {props.body}
          </Typography>
        </CardContent>
        <div className={classes.label}>
          <Label
            text={props.category}
            icon={"bookmark"}
            color={props.labelColor}
          />
        </div>
      </div>
    </Card>
  );
}
