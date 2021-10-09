import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
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
import Loading from "../../components/Loading";
import { useQuery } from "@apollo/client";
import { STUDENT_HOMEPAGE } from "../../graphql/queries";
import getAvailableClasses from "../../utils/availableClasses";
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

const subjects = [
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/200/300",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/seed/picsum/200/300",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDM2ZGU3NDgtZDUwNi00NjNmLTlkYjktNWU2ZTZmOTM3MjVlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image: "https://picsum.photos/seed/picsum/200/300",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDM2ZGU3NDgtZDUwNi00NjNmLTlkYjktNWU2ZTZmOTM3MjVlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    labelColor: "#00C890",
    category: "Программирование",
  },
];

const header = {
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
  image: "./assets/landing_page_asset1.svg",
};

const faq = [
  {
    title: "Lorem ipsum dolor sit ipsum sit?",
    body: "This text is ***really important***.",
  },
  {
    title: "Lorem ipsum dolor sit ipsum sit?",
    body: "body",
  },
  {
    title: "Lorem ipsum dolor sit ipsum sit?",
    body: "body",
  },
  {
    title: "Lorem ipsum dolor sit ipsum sit?",
    body: "body",
  },
  {
    title: "Lorem ipsum dolor sit ipsum sit?",
    body: "body",
  },
];

const SubjectsPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [filteredSubjects, setFilterSubjects] = React.useState(null);

  const { loading, error, data } = useQuery(STUDENT_HOMEPAGE);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage description={error.message} />;
  }

  const subjects = data.Subject;

  // check which classes are available in subjects
  const dropdownClasses = getAvailableClasses(subjects);

  const onFilterSelect = (selected) => { 
    if (selected) {
      if (selected === "All") {
        setFilterSubjects(subjects);
      } else {
        setFilterSubjects(
          subjects.filter((subject) => subject.Class.category === selected)
        );
      }
    }
  }; 

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

        {/* Our Subjects */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Separator title="Our Subjects" />
          <div style={{ marginTop: theme.spacing(5) }}>
            <Dropdown
              options={dropdownClasses}
              currentValue={dropdownClasses[0]}
              onFilterSelect={onFilterSelect}
            />
          </div>

          <div style={{ marginTop: theme.spacing(3) }}>
            <OurSubjects subjects={filteredSubjects || subjects} />
          </div>
        </Container> 

        {/* Join For Free */}
        <div
          style={{
            marginTop: theme.spacing(GAP_LARGE),
            backgroundColor: theme.palette.softgreen,
          }}
        >
          <Container
            component="main"
            sx={{ mt: 8, mb: 2 }}
            maxWidth="md"
            style={{
              padding: theme.spacing(7),
              textAlign: "center",
              position: "relative",
            }}
          >
            <Button
              variant="outlined"
              className={classes.buttonSecondary}
              disableElevation
              style={{
                color: theme.palette.navyblue,
                borderColor: theme.palette.navyblue,
              }}
            >
              Join For Free
            </Button>
          </Container>
        </div>

        {/* FAQ */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Typography variant="h4" style={{ color: theme.palette.navyblue }}>
            Frequently Asked Questions
          </Typography>
          <div style={{ marginTop: theme.spacing(5) }}>
            {/* map rows */}
            {faq.map((row, index) => (
              <div key={index} style={{ marginTop: theme.spacing(1) }}>
                <ExpandableList
                  title={row.title}
                  body={row.body}
                  id={index}
                  type="FAQ"
                />
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

export default SubjectsPage;
