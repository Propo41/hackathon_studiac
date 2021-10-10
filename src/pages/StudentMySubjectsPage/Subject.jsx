import { useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useNavigate } from "react-router";
import Label from "../../components/Label";
import { STUDENT_SUBJECTS } from "../../graphql/queries";

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
    width: "250px"

  },
}));

function Subject(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { subject } = props;
  const navigate = useNavigate();

  const onChapterClick = () => {
    console.log("subject Clicked");
    navigate(`/my-subject/${subject.id}`);
  };

  return (
    <Card className={classes.root} elevation={0} onClick={onChapterClick}>
      <CardMedia
        component="img"
        alt={subject.title}
        height="200"
        image={subject.image}
        title={subject.title}
        className={classes.media}
      />

      <div
        className={classes.details}
        style={{ paddingLeft: theme.spacing(3), paddingRight: 0 }}
      >
        <CardContent className={classes.content} style={{ paddingRight: 0 }}>
          <Typography variant="h6" color="textPrimary">
            {subject.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {/* slice props.body to 40 chars */}
            {subject.body.slice(0, 190)}...
          </Typography>
        </CardContent>
        <div style={{ paddingLeft: theme.spacing(2) }}>
          <Label
            text={subject.category.name}
            icon="bookmark"
            color={subject.category.color}
          />
        </div>
      </div>
    </Card>
  );
}

export default Subject;
