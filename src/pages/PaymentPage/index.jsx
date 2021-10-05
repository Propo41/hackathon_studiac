import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import PublicNavbar from "../../components/PublicNavbar";
import { useTheme } from "@material-ui/styles";
import Dropdown from "../../components/Dropdown";
import TextInputLayout from "../../components/TextInputLayout";
import SubjectFeatured from "../../components/SubjectFeatured";
import MarkdownViewer from "../../components/MarkdownViewer";

const GAP_LARGE = 12;
const GAP_SMALL = 8;

const useStyles = makeStyles((theme) => ({
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

  paper: {
    padding: theme.spacing(5),
    borderColor: "transparent",
  },
  paperSummary: {
    backgroundColor: theme.palette.lightash2,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(6),

    borderColor: "transparent",
  },
}));

const otherSubjects = [
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
];

const procedure = `**Procedure**: dapibus eu euismod. Vestibulum dui nibh non convallis rhoncus.
Sociis ullamcorper ut tincidunt massa dignissim nisi massa nunc.
Posuere netus pharetra tristique nisl, suspendisse et. Sem purus
sed d`;

const orderSummary = {
  subscription: "Class 1",
  price: "300",
  discounts: "150",
};

const PaymentPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
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
            <Typography
              variant="h2"
              style={{
                color: theme.palette.navyblue,
                marginTop: theme.spacing(4),
              }}
            >
              Checkout
            </Typography>
          </Container>
        </div>

        {/* Main content */}
        <div
          style={{
            backgroundColor: theme.palette.lightash2,
          }}
        >
          <Container
            component="main"
            sx={{ mt: 8, mb: 2 }}
            maxWidth="md"
            style={{
              marginTop: theme.spacing(GAP_SMALL),
              marginBottom: theme.spacing(GAP_LARGE),
            }}
          >
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              className={classes.paper}
            >
              <MarkdownViewer
                content={procedure}
                style={{
                  marginTop: theme.spacing(2),
                }}
              />
              <Grid container spacing={3}>
                {/* left side  */}
                <Grid item xs={12} sm={6}>
                  <div style={{ marginTop: theme.spacing(3) }}>
                    <TextInputLayout
                      name="Billing Address"
                      id="billingAddress"
                      type="text"
                      readOnly={true}
                      placeholder="Bangladesh"
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="Payment Method"
                      id="paymentMethod"
                      type="text"
                      readOnly={true}
                      placeholder="Bkash"
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="Bkash Number"
                      id="bkash"
                      type="number"
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="TransactionID"
                      id="transactionid"
                      type="text"
                    />
                  </div>

                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="Reference Used"
                      id="bkashReference"
                      type="text"
                    />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.buttonPrimary}
                    style={{ marginTop: theme.spacing(5) }}
                    disableElevation
                  >
                    Create Profile
                  </Button>
                </Grid>

                {/* 

                {/* right side  */}
                <Grid item xs={12} sm={6}>
                  <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                    className={classes.paperSummary}
                  >
                    <Typography
                      variant="h2"
                      align="center"
                      style={{ marginBottom: theme.spacing(2) }}
                    >
                      Summary
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="h6">Subscription</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6" align="right">
                          {orderSummary.subscription}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body1" color="textSecondary">
                          Original Price
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          align="right"
                        >
                          ৳{orderSummary.price}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography variant="body1" color="textSecondary">
                          Discounts
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          align="right"
                        >
                          -৳{orderSummary.discounts}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Divider />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Total</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6" align="right">
                          ৳{orderSummary.price - orderSummary.discounts}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </div>
        {/* body */}

        {/* other subjects included */}
        <div style={{ backgroundColor: theme.palette.white }}>
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
                {otherSubjects.map((subject, index) => (
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
        </div>

        {/* Footer starts here */}
        <div style={{ marginTop: theme.spacing(GAP_LARGE) }}>
          <Footer />
        </div>
      </Box>
    </>
  );
};

export default PaymentPage;
