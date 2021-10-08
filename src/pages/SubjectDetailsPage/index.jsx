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
  CircularProgress,
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
import { useQuery } from "@apollo/client";
import { SUBJECT_DETAILS } from "../../graphql/queries";
import { useParams } from "react-router";

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

const SubjectsDetailsPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 942px)");

  // get url params
  const { subjectId } = useParams();

  const { loading, error, data } = useQuery(SUBJECT_DETAILS, {
    variables: { subjectId: subjectId },
  });

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>Error</div>;
  }

  console.log(data.Subject_by_pk);
  const subject = data.Subject_by_pk;

  console.log(data.Subject_by_pk);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

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
          <PublicNavbar />
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

export default SubjectsDetailsPage;
