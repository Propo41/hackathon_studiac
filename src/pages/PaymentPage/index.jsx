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
  CircularProgress,
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
import PrivateNavbar from "../../components/PrivateNavbar";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { CHECKOUT_CLASS } from "../../graphql/queries";
import alertMaker from "../../utils/alertMaker";
import { POST_AUTH } from "../../api/api";
import Alert from "../../components/AlertCustom";
import Loading from "../../components/Loading";
import ErrorPage from "../ErrorPage";

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

const procedure = `**Procedure**: dapibus eu euismod. Vestibulum dui nibh non convallis rhoncus.
Sociis ullamcorper ut tincidunt massa dignissim nisi massa nunc.
Posuere netus pharetra tristique nisl, suspendisse et. Sem purus
sed d`;

const PaymentPage = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [alert, setAlert] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [input, setInput] = React.useState(null);

  // get url params
  const { classId } = useParams();
  const { loading, error, data } = useQuery(CHECKOUT_CLASS, {
    variables: { id: classId },
  });

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <ErrorPage description={error.message} />;
  }

  console.log(data);

  const orderSummary = {
    subscription: data.Class_by_pk.name,
    price: data.Class_by_pk.SubscriptionFee.fee,
    discounts: data.Class_by_pk.SubscriptionFee.discount,
  };

  const otherSubjects = data.Class_by_pk.Subjects;

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("data");

    console.log(input);

    try {
      // TODO: fetch these values from the server instead

      // convert string to int

      input.classId = parseInt(classId);
      input.discount = orderSummary.discounts;
      input.rawPrice = orderSummary.price;
      input.paymentGateway = "Bkash";

      const { data } = await POST_AUTH("/user/payment", input);
      console.log(data);

      console.log(alertMaker(data));

      setAlert(alertMaker(data));
    } catch (e) {
      console.log(e.response.data.data);
      console.log(e.response.data.message);

      setAlert({
        severity: "error",
        title: "Validation Error!",
        message: e.response.data.message,
      });
    }

    setIsLoading(false);
  };

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
                      name="billingAddress"
                      id="billingAddress"
                      title="Billing Address"
                      type="text"
                      readOnly={true}
                      placeholder="Bangladesh"
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="paymentGateway"
                      title="Payment Method"
                      id="paymentGateway"
                      type="text"
                      readOnly={true}
                      placeholder="Bkash"
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="phoneNumber"
                      title="Bkash Number"
                      id="phoneNumber"
                      type="number"
                      onInputChange={onInputChange}
                    />
                  </div>
                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="transactionId"
                      title="TransactionID"
                      id="transactionId"
                      type="text"
                      onInputChange={onInputChange}
                    />
                  </div>

                  <div style={{ marginTop: theme.spacing(1) }}>
                    <TextInputLayout
                      name="referenceUsed"
                      title="Reference Used"
                      id="bkashReference"
                      type="text"
                      onInputChange={onInputChange}
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
                    onClick={handleSubmit}
                  >
                    Proceed to Checkout
                  </Button>

                  <div style={{ marginTop: theme.spacing(2) }}>
                    {alert && alert.status && (
                      <Alert
                        severity={alert.severity}
                        title={alert.title}
                        message={alert.message}
                      />
                    )}
                  </div>
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
