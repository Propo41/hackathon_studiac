import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Modal,
  Dialog,
  Avatar,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Dropdown from "../../components/Dropdown";
import Chapter from "./Chapter";
import PrivateNavbar from "../../components/PrivateNavbar";
import { useParams } from "react-router";
import { GET_AUTH, POST_AUTH } from "../../api/api";
import alertMaker from "../../utils/alertMaker";
import Loading from "../../components/Loading";
import ErrorPage from "../ErrorPage";

const useStyles = makeStyles((theme) => ({
  landingImage: {
    marginLeft: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: 15,
    },
    width: "80%",
    height: "90%",
  },
  headerBackground: {
    background: theme.palette.gradients.primary,
    height: theme.spacing(25),
  },
  headerTitle: {
    color: theme.palette.navyblue,
  },
  buttonPrimary: {
    backgroundColor: theme.palette.orangelight,
    "&:hover": {
      backgroundColor: theme.palette.orange,
    },
    color: theme.palette.navyblue,
    fontSize: theme.typography.h3.fontSize,
    textTransform: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  disableTextSelection: {
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  carousel: {
    textAlign: "-webkit-center",
  },

  dialogRoot: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
}));

const StudentSubjectPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [subject, setSubject] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState({ status: false, message: "" });
  // get url params
  const { subjectId } = useParams();

  React.useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await POST_AUTH("user/get-chapters", {
          subjectId: subjectId,
        });
        setSubject(data.Subject[0]);
      } catch (e) {
        console.log(e);
        setIsError({ status: true, message: e.message });
      }
      setIsLoading(false);
    };
    exe();
  }, [subjectId]);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("Avatar clicked");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError.status) {
    return <ErrorPage description={isError.message} />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{subject.title}</title>
      </Helmet>
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
        />
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <PrivateNavbar />
        </Container>

        {/* Header stuff */}
        <div className={classes.headerBackground}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Grid container style={{ height: theme.spacing(55) }}>
              {/* Left side content */}
              <Grid item xs={8} md={8} lg={8}>
                <Typography
                  variant="h2"
                  style={{
                    color: theme.palette.navyblue,
                    marginTop: theme.spacing(4),
                    paddingRight: theme.spacing(1),
                  }}
                >
                  {subject.title}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.white,
                    marginTop: theme.spacing(2),
                    paddingRight: theme.spacing(3),
                  }}
                >
                  {subject.description.slice(0, 150)}...
                </Typography>
              </Grid>
              {/* Right side content */}
              <Grid item xs={4} md={4} lg={4}>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.navyblue,
                    marginTop: theme.spacing(5),
                    paddingLeft: theme.spacing(1),
                  }}
                >
                  New Chapter
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.white,
                    paddingLeft: theme.spacing(1),
                  }}
                >
                  {subject.nextChapterIn === 0
                    ? "Coming Today"
                    : "In " + subject.nextChapterIn + " days"}
                </Typography>

                {/* add a text button */}
                <Button
                  color="primary"
                  style={{
                    marginTop: theme.spacing(1),
                    color: theme.palette.purple,
                    padding: theme.spacing(1),
                  }}
                >
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      textTransform: "none",
                    }}
                    onClick={handleClickOpen}
                  >
                    Request New Content
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Subject chapters */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(2) }}
        >
          <div style={{ marginTop: theme.spacing(3) }}>
            {subject.Chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                onClick={() => {
                  window.location.href = `/chapter/${chapter.id}`;
                }}
                style={{ marginTop: theme.spacing(2) }}
              >
                <Chapter key={index} chapter={chapter} />
              </div>
            ))}
          </div>
        </Container>

        <div style={{ marginBottom: theme.spacing(10) }}></div>

        {/* Footer starts here */}
        <Footer />
      </Box>
    </>
  );
};

function AlertDialog(props) {
  const theme = useTheme();
  const onRequestClick = () => {
    props.handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={props.classes.dialogRoot}>
        <Typography
          variant="h1"
          style={{
            marginTop: theme.spacing(1),
          }}
          color="textPrimary"
        >
          Request New Chapter
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: theme.spacing(3) }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida
          dui, fermentum suspendisse nibh. Sagittis sagittis hendrerit porttitor
          est in sit in risus. Adipiscing tortor morbi aliquet sed lacus. Nibh
          scelerisque porta ut donec. Pulvinar cursus convallis
        </Typography>

        <Button
          variant="contained"
          className={props.classes.buttonPrimary}
          disableElevation
          style={{ marginTop: theme.spacing(5) }}
          fullWidth
          onClick={onRequestClick}
        >
          Request
        </Button>
      </div>
    </Dialog>
  );
}

export default StudentSubjectPage;
