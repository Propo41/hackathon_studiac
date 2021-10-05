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
  CardHeader,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Lesson from "./Lesson";
import ReactPlayer from "react-player";
import fileDownload from "js-file-download";
import axios from "axios";
import { useNavigate } from "react-router";

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
    height: theme.spacing(20),
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
  mediaIcon: {
    objectFit: "scale-down",
    backgroundColor: theme.palette.lightash,
    textAlign: "-webkit-center",
    paddingTop: theme.spacing(3),
  },
}));

const chapter = {
  id: "1123",
  chapterNumber: 12,
  title: "Chapter Name",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, consectetur adipiscing elit",
  lessons: [
    {
      id: "1",
      number: 1,
      title: "Lesson 1",

      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, 
      
      consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor empor 
      `,
      media: {
        type: "video",
        preview:
          "https://c.ndtvimg.com/2020-03/ctpi4dd8_billie-eilish-body-shaming_625x300_11_March_20.jpg",
        url: "https://youtu.be/6GTw3kyaKgQ",
      },
    },
    {
      id: "2",
      number: 2,
      title: "Lesson 2",

      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, consectetur adipiscing elit, 

      sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor empor 
      `,
      media: {
        type: "material",
        url: "http://www.africau.edu/images/default/sample.pdf",
        fileType: "pdf",
      },
    },
    {
      id: "3",
      number: 3,
      title: "Lesson 3",

      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, consectetur adipiscing elit, 

      sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor empor 
      `,
      media: {
        type: "material",
        url: "http://www.africau.edu/images/default/sample.pdf",
        fileType: "pdf",
      },
    },
    {
      id: "4",
      number: 4,
      title: "Lesson 4",

      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, 
      
      consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor empor 
      `,
      media: {
        type: "video",
        preview: "https://i.insider.com/5e501d3ba9f40c2c1e2c98e6?width=700",
        url: "https://youtu.be/Ga6N2au2xrc",
      },
    },
  ],
};

const StudentChapterPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  // by default, start from 0th lesson
  const [currentLesson, setCurrentLesson] = React.useState(chapter.lessons[0]);

  const onLessonClick = (lesson) => {
    console.log(lesson);
    setCurrentLesson(lesson);
    // smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Subjects</title>
      </Helmet>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <PublicNavbar />
        </Container>

        {/* Header stuff */}
        <div className={classes.headerBackground}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Grid container>
              {/* Left side content */}
              <Typography
                variant="h2"
                style={{
                  color: theme.palette.navyblue,
                  marginTop: theme.spacing(4),
                  paddingRight: theme.spacing(1),
                }}
              >
                {chapter.chapterNumber + ". " + chapter.title}
              </Typography>

              <Typography
                variant="body1"
                style={{
                  color: theme.palette.white,
                  marginTop: theme.spacing(1),
                  paddingRight: theme.spacing(3),
                }}
              >
                {chapter.description}
              </Typography>
            </Grid>
          </Container>
        </div>

        {/*Video Preview*/}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(0) }}
        >
          <div style={{ marginTop: theme.spacing(3) }}>
            {currentLesson.media.type === "video" ? (
              <Card elevation={0}>
                <ReactPlayer
                  url={currentLesson.media.url}
                  controls={true}
                  width="100%"
                  height={theme.spacing(55)}
                />
              </Card>
            ) : (
              <Card elevation={0} className={classes.mediaIcon}>
                <Avatar variant="rounded" src="/assets/file_icon.svg" />

                <CardContent>
                  <Button
                    size="small"
                    href={currentLesson.media.url}
                    target="_blank"
                    to={currentLesson.media.url}
                    style={{
                      color: theme.palette.darkash,
                      textTransform: "none",
                    }}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </Container>

        {/*  Lesson Contents */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(0) }}
        >
          <div style={{ marginTop: theme.spacing(3) }}>
            <Grid container component="main">
              {/* left side */}
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  style={{
                    marginTop: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                  }}
                >
                  {currentLesson.number + ". " + currentLesson.title}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    marginTop: theme.spacing(2),
                    paddingRight: theme.spacing(3),
                  }}
                  color="textSecondary"
                >
                  {currentLesson.description}
                </Typography>
              </Grid>

              {/* available lessons */}
              <Grid item xs={12} md={4}>
                {chapter.lessons.map((lesson, index) => (
                  <Lesson
                    lesson={lesson}
                    key={index}
                    isWatching={lesson.id === currentLesson.id}
                    onLessonClick={onLessonClick}
                  />
                ))}
              </Grid>
            </Grid>
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

export default StudentChapterPage;
