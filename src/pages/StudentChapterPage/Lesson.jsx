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
  mediaIcon: {
    borderBottomLeftRadius: "none",
    borderBottomRightRadius: "none",
    objectFit: "scale-down",
    backgroundColor: theme.palette.lightash,
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
  buttonSecondary: {
    borderColor: theme.palette.lightgreen,
    color: theme.palette.green,
    fontSize: theme.typography.body2.fontSize,
    textTransform: "none",
    marginLeft: theme.spacing(0),
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

  const onLessonClick = () => {
    props.onLessonClick(props.index);
  };

  return (
    <Card className={classes.root} elevation={0} onClick={onLessonClick}>
      <CardMedia
        component="img"
        alt={props.title}
        height="150"
        image={
          lesson.type === "video"
            ? lesson.Video.preview
            : "/assets/file_icon.svg"
        }
        title={props.title}
        className={lesson.type === "video" ? classes.media : classes.mediaIcon}
      />
      <CardContent style={{ paddingLeft: 0 }}>
        <Typography variant="body1" color="textPrimary">
          {lesson.number + ". " + lesson.title}
        </Typography>
      </CardContent>

      <CardActions style={{ paddingLeft: 0 }}>
        {props.isWatching && (
          <Button
            size="small"
            variant="outlined"
            disabled
            style={{ color: theme.palette.green }}
            className={classes.buttonSecondary}
          >
            Watching
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Lesson;
