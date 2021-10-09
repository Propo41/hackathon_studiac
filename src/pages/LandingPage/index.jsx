import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Link,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import { useTheme } from "@material-ui/styles";
import Separator from "../../components/Separator";
import OurInstructors from "./OurInstructors";
import AboutUs from "./AboutUs";
import Header from "./Header";
import OurSubjects from "./OurSubjects";
import OurCommunity from "./OurCommunity";
import PublicNavbar from "../../components/PublicNavbar";
import { useNavigate } from "react-router";
import { useQuery } from "@apollo/client";
import { LANDING_PAGE } from "../../graphql/queries";
import { community, header, tiers } from "../../mock";
import Loading from "../../components/Loading";
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
    width: "100%",
    height: "100%",
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

const LandingPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(LANDING_PAGE);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage description={error.message} />;
  }
  const subjects = data.Subject;
  const contributors = data.Contributor;

  console.log(data);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Studiac</title>
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

        {/* What we do */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_SMALL) }}
        >
          <Separator title="What Our Modules Contain" />
          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <AboutUs classes={classes} tiers={tiers} />
          </div>
        </Container>

        {/* Our instructors */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_LARGE) }}
        >
          <Separator title="Our Instructors" />
          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <OurInstructors instructors={contributors} />
          </div>
        </Container>

        {/* Our Subjects */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_LARGE) }}
        >
          <Separator title="Our Subjects" />
          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <OurSubjects subjects={subjects} />
          </div>
        </Container>

        {/* Explore All */}
        <div
          style={{
            marginTop: theme.spacing(GAP_LARGE),
            backgroundColor: theme.palette.softblue,
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
              <Link href="/subjects" style={{ textDecoration: "none" }}>
                Explore All
              </Link>
            </Button>
          </Container>
        </div>

        {/* Our Community */}
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="md"
          style={{ marginTop: theme.spacing(GAP_LARGE) }}
        >
          <Separator title="Our Community" />
          <div style={{ marginTop: theme.spacing(GAP_SMALL) }}>
            <OurCommunity community={community} />
          </div>
        </Container>

        {/* Join Us now */}
        <div
          style={{
            marginTop: theme.spacing(GAP_LARGE),
            backgroundColor: theme.palette.softyellow,
          }}
        >
          <Container
            component="main"
            sx={{ mt: 8, mb: 2 }}
            maxWidth="md"
            style={{
              padding: theme.spacing(10),
              textAlign: "center",
              position: "relative",
            }}
          >
            <Typography variant="h2" style={{ color: theme.palette.navyblue }}>
              <Link href="/sign-up" style={{ textDecoration: "none" }}>
                Join Us Now
              </Link>
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              style={{ marginTop: theme.spacing(3) }}
            >
              Signing up for Studiac is easy! Become a member of Studiac
              Community and start learning things differently today!
            </Typography>

            <Button
              variant="outlined"
              className={classes.buttonSecondary}
              disableElevation
              style={{
                color: theme.palette.navyblue,
                borderColor: theme.palette.navyblue,
                marginTop: theme.spacing(6),
              }}
            >
              <Link href="/sign-up" style={{ textDecoration: "none" }}>
                Join For Free
              </Link>
            </Button>
          </Container>
        </div>
        {/* Footer starts here */}
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
