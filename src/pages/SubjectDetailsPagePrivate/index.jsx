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
import PrivateNavbar from "../../components/PrivateNavbar";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { SUBJECT_DETAILS } from "../../graphql/queries";
import Loading from "../../components/Loading";
import ErrorPage from "../ErrorPage";

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
    height: theme.spacing(100),
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(120),
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
  id: "1",
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
      id: "1",
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: "2",
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: "3",
      title: "Программирование",
      shortDescription:
        "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: "4",
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

const SubjectsDetailsPagePrivate = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 942px)");

  // get url params
  const { subjectId } = useParams();

  // smooth scroll to top with animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();

  const { loading, error, data } = useQuery(SUBJECT_DETAILS, {
    variables: { subjectId: subjectId },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage description={error.message} />;
  }

  console.log(data.Subject_by_pk);
  const subject = data.Subject_by_pk;

  console.log(data.Subject_by_pk);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{subject.title}</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <PrivateNavbar />
        </Container>

        {/* Header stuff */}
        <div className={classes.headerBackground}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Header
              title={subject.title}
              shortDescription={subject.shortDescription}
              image={subject.image}
              rating={0}
              categoryName={subject.Class.name}
              categoryColor={subject.Class.color}
              classId={subject.Class.id}
              subscriptionFee={subject.Class.SubscriptionFee.fee}
              subscriptionDiscount={subject.Class.SubscriptionFee.discount}
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
            {subject.Chapters.map((row, index) => (
              <div key={index} style={{ marginTop: theme.spacing(1) }}>
                <ExpandableList
                  title={row.title}
                  id={index}
                  lessons={row.Lessons}
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
              {subject.Class.Subjects.map((subject) => (
                <Grid item key={subject.id} xs={12} sm={6} md={4}>
                  <SubjectFeatured
                    id={subject.id}
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
            <SubjectCreators creators={subject.SubjectContributors} />
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

export default SubjectsDetailsPagePrivate;
