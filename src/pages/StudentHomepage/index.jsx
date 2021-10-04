import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Separator from "../../components/Separator";
import Header from "./Header";
import OurSubjects from "./OurSubjects";
import Dropdown from "../../components/Dropdown";
import ExpandableList from "../../components/ExpandableList";
import Label from "../../components/Label";
import iconMapper from "../../utils/icon_mapper";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

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
  buttonSecondary: {
    borderColor: theme.palette.lightgreen,
    "&:hover": {
      borderColor: theme.palette.green,
    },
    color: theme.palette.green,
    fontSize: theme.typography.h3.fontSize,
    textTransform: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    margin: "0 0.1rem",
    padding: "0.5rem 1rem",
  },
  cardAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
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
}));

const useStyles2 = makeStyles((theme) => ({
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

const subjects = [
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    labelColor: "#00C890",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    labelColor: "#00C890",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    labelColor: "#00C890",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    labelColor: "#00C890",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
];

const header = {
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
};

const dropdownClasses = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const userRecentWatch = {
  lessonTitle: "03. Lesson Name",
  lessonImage: "https://picsum.photos/seed/picsum/200/300",
  category: {
    name: "Class 1",
    color: "#162874",
  },
  lessonDescription: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, consectetur adipiscing elit, 

sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor empor `,
};
const StudentHomepage = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Subjects</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <PublicNavbar />
        </Container>

        {/* Header stuff */}
        <div className={classes.headerBackground}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Header
              title={header.title}
              subtitle={header.subtitle}
              image={header.image}
              classes={classes}
            />
          </Container>
        </div>

        {/* Continue Watching */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Separator title="Continue Watching" />

          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <ContinueWatching userRecentWatch={userRecentWatch} />
          </div>
        </Container>

        {/* Other Subjects */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Separator title="Other Subjects" />
          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <Dropdown
              options={dropdownClasses}
              currentValue={dropdownClasses[0]}
            />
          </div>

          <div style={{ marginTop: theme.spacing(3) }}>
            <OurSubjects subjects={subjects} />
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

function ContinueWatching({ userRecentWatch }) {
  const classes = useStyles2();
  const theme = useTheme();

  const onRecentVideoClick = () => {
    console.log("Clicked");
  };

  return (
    <Card className={classes.root} elevation={0} onClick={onRecentVideoClick}>
      <CardMedia
        component="img"
        alt={userRecentWatch.lessonTitle}
        height="200"
        image={userRecentWatch.lessonImage}
        title={userRecentWatch.lessonTitle}
        className={classes.media}
      />

      <div
        className={classes.details}
        style={{ paddingLeft: theme.spacing(3), paddingRight: 0 }}
      >
        <CardContent className={classes.content} style={{ paddingRight: 0 }}>
          <Typography variant="h6" color="textPrimary">
            {userRecentWatch.lessonTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {/* slice props.body to 40 chars */}
            {userRecentWatch.lessonDescription.slice(0, 190)}...
          </Typography>
        </CardContent>
        <div style={{ paddingLeft: theme.spacing(2) }}>
          <Label
            text={userRecentWatch.category.name}
            icon="bookmark"
            color={userRecentWatch.category.color}
          />
        </div>
      </div>
    </Card>
  );
}

export default StudentHomepage;
