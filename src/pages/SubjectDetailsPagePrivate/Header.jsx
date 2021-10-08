import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { Typography, Hidden, Grid, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { useNavigate } from "react-router";
import Label from "../../components/Label";

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
}));

const Header = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(props.rating);
  const navigate = useNavigate();

  return (
    <Grid
      container
      style={{ paddingTop: theme.spacing(5), height: theme.spacing(52) }}
    >
      <Grid item xs={12} md={12} lg={12}>
        <Card elevation={0}>
          <CardMedia
            component="img"
            alt={props.title}
            height={theme.spacing(35)}
            image={props.image}
            title={props.title}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Typography
          variant="h1"
          style={{
            color: theme.palette.navyblue,
            marginTop: theme.spacing(3),
            paddingRight: theme.spacing(2),
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          style={{
            color: theme.palette.white,
            marginTop: theme.spacing(2),
            paddingRight: theme.spacing(2),
          }}
        >
          {props.shortDescription}
        </Typography>

        {/* rating */}
        <div style={{ marginTop: theme.spacing(2) }}>
          <Rating name="read-only" value={value} readOnly />
        </div>

        <div style={{ marginTop: theme.spacing(2) }}>
          <Label
            text={props.category.name}
            color={props.category.color}
            icon="bookmark"
          />
        </div>
        <Button
          variant="contained"
          className={classes.buttonPrimary}
          disableElevation
          style={{ marginTop: theme.spacing(2) }}
          onClick={() => {
            navigate("/payment");
          }}
        >
          Subscribe
        </Button>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <SubscribePrice price={props.subscriptionFee} />
      </Grid>
    </Grid>
  );
};
export default Header;

const SubscribePrice = (props) => {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      style={{ padding: theme.spacing(3), marginTop: theme.spacing(3) }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography
            variant="h1"
            align="center"
            style={{ color: theme.palette.navyblue }}
          >
            Subscription Monthly
          </Typography>
        </Box>
        <Typography
          variant="h1"
          align="center"
          style={{ color: theme.palette.green, marginTop: theme.spacing(1) }}
        >
          {"৳" + props.price}
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          style={{ marginTop: theme.spacing(2) }}
        >
          And access all subjects of that class
        </Typography>
      </CardContent>
    </Card>
  );
};
