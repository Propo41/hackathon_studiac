import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Button, CardActions } from "@material-ui/core";
import iconMapper from "../../utils/icon_mapper";

const useStyles = makeStyles((theme) => ({
  details: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(1),
  },
  content: {
    flex: "1 0 auto",
    paddingTop: 0,
    paddingLeft: 0,
  },
  media: {
    borderBottomLeftRadius: "none",
    borderBottomRightRadius: "none",
  },

  root: {
    minWidth: 150,
    cursor: "pointer",
    marginTop: theme.spacing(1),
    // add margintop to first child
    "&:first-child": {
      marginTop: theme.spacing(2),
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

/**
 * @param  {Object} lesson
 * @param  {Boolean} isWatching
 */
function Lesson(props) {
  const classes = useStyles();
  const { lesson } = props;
  const theme = useTheme();

  console.log(lesson);
  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt={props.title}
        height="150"
        image={
          lesson.media.type === "video"
            ? lesson.media.preview
            : "/assets/file_preview_small.png"
        }
        title={props.title}
        className={classes.media}
      />
      <CardContent style={{ paddingLeft: 0 }}>
        <Typography variant="body1" color="textPrimary">
          {lesson.number + ". " + lesson.title}
        </Typography>
      </CardContent>

      <CardActions>
        {props.isWatching && (
          <Button size="small" disabled style={{ color: theme.palette.green }}>
            Watching
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Lesson;

/* <Card className={classes.root} elevation={0} sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        alt={props.title}
        height="120"
        image={
          lesson.type === "video"
            ? lesson.media.preview
            : "/assets/file_preview_small.png"
        }
        title={props.title}
        className={classes.media}
      />
      <CardContent className={classes.content}>
        <Typography variant="body1" color="textPrimary">
          {lesson.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */
