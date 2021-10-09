import { useQuery } from "@apollo/client";
import {
  Avatar,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Modal,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { CONTRIBUTOR_PROFILE } from "../../graphql/queries";
import ErrorPage from "../../pages/ErrorPage";
import Loading from "../Loading";
import MarkdownViewer from "../MarkdownViewer";
import SubjectInstructor from "../SubjectInstructor";

const useStyles = makeStyles((theme) => ({
  root: {
    // center
    textAlign: "center",
    width: theme.spacing(28),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    display: "inline-block",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    color: theme.palette.black,
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  subtitle: {
    color: theme.palette.darkash,
    marginBottom: theme.spacing(1),
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  body: {
    color: theme.palette.darkash,
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  cover: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    // add breakpoint styles
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    display: "inline-block",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  dialogRoot: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

/**
 * @param {string} id
 * @param {string} title
 * @param {string} subtitle [optional]
 * @param {string} body
 * @param {string} image
 * @param {function} onAvatarClick
 */
const AvatarProfile = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Avatar clicked");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={classes.root} elevation={0} onClick={handleClickOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AlertDialog
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          classes={classes}
          id={props.id}
        />
      </Modal>

      <Avatar alt={props.title} src={props.image} className={classes.avatar}>
        {props.title.slice(0, 1)}
      </Avatar>
      <Typography variant="h6" className={classes.title} disa>
        {props.title}
      </Typography>
      {props.subtitle && (
        <Typography variant="h6" className={classes.subtitle}>
          {props.subtitle}
        </Typography>
      )}
      <Typography variant="body1" className={classes.body}>
        {props.body.slice(0, 80)}..
      </Typography>
    </Paper>
  );
};

function AlertDialog(props) {
  const theme = useTheme();
  // fetch user info from database using props.id
  console.log(props.id);

  const { loading, error, data } = useQuery(CONTRIBUTOR_PROFILE, {
    variables: { id: props.id },
  });

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <ErrorPage description={error.message} />;
  }

  var user = {
    id: props.id,
    name: "John Doe",
    designation: "Software Engineer",
    bio: "tesque dapibus eu euismod. Vestibulum dui nibh non convallis rhoncus. Sociis ullamcorper ut tincidunt massa dignissim nisi massa nunc. Posuere netus pharetra tristique nisl, suspendis",
    image: "https://source.unsplash.com/random",
    SubjectContributors: [
      {
        id: 1,
        title: "Introduction to Computer Science",
        image: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        title: "Introduction to Computer Science",
        image: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        title: "Introduction to Computer Science",
        image: "https://source.unsplash.com/random",
      },
    ],
  };

  user = data.Contributor_by_pk;

  console.log(user);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={props.classes.dialogRoot}>
        <Avatar
          alt="User image"
          className={props.classes.cover}
          src={user.image}
        />
        <Typography
          variant="h1"
          style={{
            color: theme.palette.navyblue,
            marginTop: theme.spacing(1),
          }}
        >
          {user.name}
        </Typography>

        <Typography
          variant="h4"
          color="textPrimary"
          style={{ marginTop: theme.spacing(1) }}
        >
          {user.designation}
        </Typography>

        <Divider style={{ marginTop: theme.spacing(1) }} />

        <div style={{ marginTop: theme.spacing(2) }}>
          <MarkdownViewer content={user.bio} />
        </div>

        {user.SubjectContributors.length > 0 && (
          <Typography
            variant="h2"
            style={{
              color: theme.palette.navyblue,
              marginTop: theme.spacing(3),
            }}
          >
            Other Contributions
          </Typography>
        )}

        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          style={{ marginTop: theme.spacing(1) }}
        >
          {user.SubjectContributors.map((subject, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <SubjectInstructor
                title={subject.Subject.title}
                image={subject.Subject.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Dialog>
  );
}

export default AvatarProfile;
