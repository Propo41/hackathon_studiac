import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Separator from "../../components/Separator";
import Header from "./Header";
import Dropdown from "../../components/Dropdown";
import ExpandableList from "../../components/ExpandableList";
import MarkdownViewer from "../../components/MarkdownViewer";
import SubjectFeatured from "../../components/SubjectFeatured";
import SubjectCreators from "./SubjectCreators";

const GAP_LARGE = 12;
const GAP_SMALL = 8;

const useStyles = makeStyles((theme) => ({
  marginLeft: 50,
  landingImage: {
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: 15,
    },
    width: "80%",
    height: "90%",
  },
  headerBackground: {
    background: theme.palette.gradients.primary,
    height: theme.spacing(90),
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(90),
    },
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

const subject = {
  title: "Программирование",
  shortDescription:
    "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work",
  overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida dui, fermentum suspendisse nibh. Sagittis sagittis hendrerit porttitor est in sit in risus. Adipiscing tortor morbi aliquet sed lacus. Nibh scelerisque porta ut donec. Pulvinar cursus convallis egestas in eleifend. Porta pellentesque dapibus eu euismod. Vestibulum dui nibh non convallis rhoncus. Sociis ullamcorper ut tincidunt massa dignissim nisi massa nunc. Posuere netus pharetra tristique nisl, suspendisse et. Sem purus sed donec odio id nam quam metus et. Commodo, aliquet risus a, eget. Ac tristique in varius et ipsum id velit. 

  Viverra eget 
  leo diam imperdiet. Sed habitant a neque, mollis vel proin id. Mauris pulvinar diam pellentesque varius pellentesque lectus tempus tempus placerat. Euismod vitae sed diam nullam laoreet non nibh enim odio. Neque aliquam ipsum amet etiam volutpat ultrices eget pulvinar. Venenatis congue suspendisse ut tempor sapien imperdiet. In nibh nisi ut pretium nisi sit pharetra tellus. Turpis pharetra sagittis curabitur purus donec urna elementum laoreet. 
  
  Porttitor quam eu, 
  mattis ornare sagittis, 
  lorem. In integer 
  
  in blandit dolor. Amet, nunc, donec lectus consequat metus, tortor in odio sed. Turpis et massa, nascetur et vulputate etiam vivamus blandit. Nulla lacinia magnis dapibus nunc, eget pretium quis imperdiet. Ac sed arcu nunc iaculis. Viverra praesent volutpat lorem venenatis. Habitasse cras ipsum ornare non mi ut tellus netus. Felis nec semper tempor viverra nec facilisi ultrices gravida.`,
  image: "https://picsum.photos/seed/picsum/200/300",
  rating: 3,
  category: {
    name: "Class 1",
    color: "#ff0000",
  },
  subscriptionFee: 300,
  syllabus: [
    {
      title: "Программирование",
      lessons: [
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "material", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
      ],
    },

    {
      title: "Программирование",
      lessons: [
        { type: "material", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "material", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
      ],
    },

    {
      title: "Программирование",
      lessons: [
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "material", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
      ],
    },
    {
      title: "Программирование",
      lessons: [
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
        { type: "material", name: "Frozen yoghurt", duration: "45:00" },
        { type: "video", name: "Frozen yoghurt", duration: "45:00" },
      ],
    },
  ],
  featuredSubjects: [
    {
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ],
  subjectContributors: [
    {
      id: "Програfммированиеs",
      name: "Программирование",
      image: "https://picsum.photos/seed/picsum/200/300",
      designation: "Instructor",
      bio: "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.",
    },
    {
      id: "Программир3ованиеs",
      name: "Программирование",
      image: "https://picsum.photos/seed/picsum/200/300",
      designation: "Instructor",
      bio: "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.",
    },
    {
      id: "Программdированиеs",
      name: "Программирование",
      image: "https://picsum.photos/seed/picsum/200/300",
      designation: "Instructor",
      bio: "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.",
    },
    {
      id: "Программировsаниеs",
      name: "Программирование",
      image: "https://picsum.photos/seed/picsum/200/300",
      designation: "Instructor",
      bio: "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.",
    },
  ],
};

const SubjectsDetailsPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 942px)");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Subject Details</title>
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
              title={subject.title}
              shortDescription={subject.shortDescription}
              image={subject.image}
              rating={subject.rating}
              category={subject.category}
              subscriptionFee={subject.subscriptionFee}
            />
          </Container>
        </div>

        {isMobile && <div style={{ marginBottom: theme.spacing(8) }} />}

        {/* Subject overview */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Typography variant="h4" style={{ color: theme.palette.navyblue }}>
            Subject Overview
          </Typography>
          <div style={{ marginTop: theme.spacing(5) }}>
            {/* map rows */}
            <MarkdownViewer content={subject.overview} />
          </div>
        </Container>

        {/* Subject Contents */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Typography variant="h4" style={{ color: theme.palette.navyblue }}>
            Subject Contents
          </Typography>
          <div style={{ marginTop: theme.spacing(5) }}>
            {/* map rows */}
            {subject.syllabus.map((row, index) => (
              <div key={index} style={{ marginTop: theme.spacing(1) }}>
                <ExpandableList
                  title={row.title}
                  id={index}
                  lessons={row.lessons}
                  type="Syllabus"
                />
              </div>
            ))}
          </div>
        </Container>

        {/* Other Subjects in this Class */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Typography variant="h4" style={{ color: theme.palette.navyblue }}>
            Other Subjects in this Class
          </Typography>
          <div style={{ marginTop: theme.spacing(5) }}>
            {/* map rows */}
            <Grid container spacing={3} alignItems="flex-end">
              {subject.featuredSubjects.map((subject, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <SubjectFeatured
                    image={subject.image}
                    title={subject.title}
                    body={subject.shortDescription}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>

        {/* Subject Creators */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Typography variant="h4" style={{ color: theme.palette.navyblue }}>
            Subject Creators
          </Typography>

          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <SubjectCreators creators={subject.subjectContributors} />
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

export default SubjectsDetailsPage;
