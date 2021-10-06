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

const tiers = [
  {
    title: "Free",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Learn More",
    buttonVariant: "outlined",
    icon: "https://i.pinimg.com/originals/01/ff/6e/01ff6e574c13777522d7a4d88c0a53a8.jpg",
    navigateUrl: "/learn-more",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get Started",
    icon: "https://i.pinimg.com/originals/01/ff/6e/01ff6e574c13777522d7a4d88c0a53a8.jpg",
    buttonVariant: "contained",
    navigateUrl: "/sign-up",
  },
  {
    title: "Enterprise",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    icon: "https://i.pinimg.com/originals/01/ff/6e/01ff6e574c13777522d7a4d88c0a53a8.jpg",
    buttonText: "Contact Us",
    buttonVariant: "outlined",
    navigateUrl: "/contact-us",
  },
];

const instructors = [
  {
    id: "1",
    title: "Mia Malkova",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://img.mensxp.com/media/content/2017/Nov/image-4-pinterest-1510066942.jpg",
  },
  {
    id: "2",
    title: "Danny Daniels",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://www.allkpop.com/upload/2021/09/content/301504/1633028697-untitled-1.jpg",
  },
  {
    id: "3",
    title: "Soung Pho",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squid-game-1632309278.jpg",
  },
  {
    id: "4",
    title: "Min Mu",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image: "https://pbs.twimg.com/media/FAela2EVUAImJks.jpg",
  },
];

const subjects = [
  {
    id: "1",
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://img.mensxp.com/media/content/2017/Nov/image-2-pinterest-1510066907.jpg",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    id: "2",
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://media1.popsugar-assets.com/files/thumbor/JwAe7HTE4uBssC4-b9jHtKeVojg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/09/25/543/n/2589278/346f343e5baa23c0ad0f38.84693216_/i/Who-Jodie-Comer.jpg",
    labelColor: "#00C890",
    category: "Программирование",
  },
  {
    id: "3",
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

const community = [
  {
    title: "Community 1",
    image: "https://source.unsplash.com/random",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Category 1",
    labelColor: "#162874",
  },
  {
    title: "Community 1",
    image: "https://source.unsplash.com/random",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Category 1",
    labelColor: "#162874",
  },
];

const LandingPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

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
          <Separator title="What we do" />
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
            <OurInstructors instructors={instructors} />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad.
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
