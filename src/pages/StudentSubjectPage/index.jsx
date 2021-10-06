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

const GAP_LARGE = 12;
const GAP_SMALL = 8;

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

const subject = {
  id: "1",
  title: "Mathematics",
  description:
    "Mathematics is the study of topics such as quantity, structure, space, and change.",
  subjectChapters: [
    {
      id: "1",
      chapter: "1",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 40,
    },
    {
      id: "2",
      chapter: "2",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 50,
    },
    {
      id: "3",
      chapter: "3",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 40,
    },
    {
      id: "4",
      chapter: "4",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 10,
    },
  ],
};

const upcomingChapterTime = "3 days";

const StudentSubjectPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("Avatar clicked");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            <Grid container style={{ height: theme.spacing(52) }}>
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
                  {subject.description}
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
                  {"In " + upcomingChapterTime}
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
          style={{ marginTop: theme.spacing(0) }}
        >
          <div style={{ marginTop: theme.spacing(3) }}>
            {subject.subjectChapters.map((chapter, index) => (
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

        {/* Footer starts here */}
        <div style={{ marginTop: theme.spacing(GAP_LARGE) }}>
          <Footer />
        </div>
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
