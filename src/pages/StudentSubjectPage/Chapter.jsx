import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Label from "../../components/Label";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    cursor: "pointer",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingTop: 0,
  },
  media: {
    borderRadius: "inherit",
  },
}));

function Chapter(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { chapter } = props;

  console.log(props);

  const onSubjectClick = () => {
    console.log("subject Clicked");
  };

  return (
    <Card className={classes.root} elevation={0} onClick={onSubjectClick}>
      <CardMedia
        component="img"
        alt={chapter.title}
        height="200"
        image={chapter.image}
        title={chapter.title}
        className={classes.media}
      />

      <div
        className={classes.details}
        style={{ paddingLeft: theme.spacing(3), paddingRight: 0 }}
      >
        <CardContent className={classes.content} style={{ paddingRight: 0 }}>
          <Typography variant="h6" color="textPrimary">
            {chapter.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {/* slice props.body to 40 chars */}
            {chapter.body.slice(0, 190)}...
          </Typography>
        </CardContent>
        <div style={{ paddingLeft: theme.spacing(3) }}>
          <ProgressBar progressLength={0} />
        </div>
      </div>
    </Card>
  );
}

export default Chapter;
