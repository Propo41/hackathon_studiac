import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Dropdown from "../../components/Dropdown";
import Subject from "./Subject";
import PrivateNavbar from "../../components/PrivateNavbar";
import { useQuery } from "@apollo/client";
import { STUDENT_SUBJECTS } from "../../graphql/queries";
import Loading from "../../components/Loading";
import getAvailableClasses from "../../utils/availableClasses";
import { useLazyQuery } from "@apollo/client";
import ErrorPage from "../ErrorPage";

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
    height: theme.spacing(GAP_LARGE),
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

var subjects = [
  {
    id: "2",
    title: "Subject 1",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
  {
    id: "2",
    title: "Subject 2",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },

  {
    id: "3",
    title: "Subject 3",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },

  {
    id: "4",
    title: "Subject 4",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    category: {
      name: "Class 1",
      color: "#00C890",
    },
  },
];

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

const StudentMySubjectsPage = () => {
  const theme = useTheme();
  const classes = useStyles();

  const { loading, error, data } = useQuery(STUDENT_SUBJECTS);
  const [filteredSubjects, setFilterSubjects] = React.useState(null);

  console.log(loading);
  var done = false;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage description={error.message} />;
  }

  const enrollments = data.Enrollment;

  // iterate subjects and push content in an array
  const subjects = [];
  for (let i = 0; i < enrollments.length; i++) {
    const className = enrollments[i].Class.name;
    const classId = enrollments[i].Class.id;
    const classColor = enrollments[i].Class.color_code;
    const subjectsRaw = enrollments[i].Class.Subjects;

    for (let j = 0; j < subjectsRaw.length; j++) {
      const sub = subjectsRaw[j];
      subjects.push({
        id: sub.id,
        title: sub.title,
        body: sub.short_description,
        image: sub.image,
        category: {
          id: classId,
          name: className,
          color: classColor,
        },
      });
    }
  }

  console.log(loading);

  // check which classes are available in subjects
  const dropdownClasses = [];
  dropdownClasses.push("All");
  subjects.forEach((subject) => {
    // only  push unique classes
    if (dropdownClasses.indexOf(subject.category.name) === -1) {
      dropdownClasses.push(subject.category.name);
    }
  });

  const onFilterSelect = (selected) => {
    if (selected) {
      if (selected === "All") {
        setFilterSubjects(subjects);
      } else {
        setFilterSubjects(
          subjects.filter((subject) => subject.category.name === selected)
        );
      }
    }
  };

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

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
          <PrivateNavbar />
        </Container>

        {/* Header stuff */}
        <div className={classes.headerBackground}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Typography
              variant="h2"
              style={{
                color: theme.palette.navyblue,
                marginTop: theme.spacing(4),
              }}
            >
              My Subjects
            </Typography>
          </Container>
        </div>

        {/* My Subjects */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(0) }}
        >
          {(subjects || filteredSubjects).length === 0 && (
            <div
              style={{
                textAlign: "-webkit-center",
                marginTop: theme.spacing(10),
                marginBottom: theme.spacing(10),
              }}
            >
              <img
                src="/assets/empty.svg"
                alt="Empty State"
                style={{ width: "50%" }}
              />
              <Typography variant="h4" style={{ marginTop: theme.spacing(4) }}>
                You are not subscribed to any classes yet!
              </Typography>
            </div>
          )}

          {(subjects || filteredSubjects).length > 0 && (
            <div style={{ marginTop: theme.spacing(5) }}>
              <Dropdown
                options={dropdownClasses}
                currentValue={dropdownClasses[0]}
                onFilterSelect={onFilterSelect}
              />
            </div>
          )}

          <div style={{ marginTop: theme.spacing(3) }}>
            {(subjects || filteredSubjects).map((subject) => (
              <div
                style={{ marginTop: theme.spacing(2) }}
                key={subject.id}
                onClick={() => {
                  window.location.href = `/my-subject/${subject.id}`;
                }}
              >
                <Subject subject={subject} />
              </div>
            ))}
          </div>
        </Container>

        <div style={{ marginBottom: theme.spacing(10) }} />

        {/* Footer starts here */}
        <Footer />
      </Box>
    </>
  );
};

export default StudentMySubjectsPage;
