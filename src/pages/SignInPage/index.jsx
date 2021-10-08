import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Hidden,
  makeStyles,
  MuiThemeProvider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useTheme } from "@material-ui/core";
import TextInputLayout from "../../components/TextInputLayout";
import Separator from "../../components/Separator";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/AlertCustom";
import { POST } from "../../api/api";
import alertMaker from "../../utils/alertMaker";

const useStyles = makeStyles((theme) => ({
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
  separatorRoot: {
    width: "100%",
    textAlign: "center",
    height: "12px",
    borderBottom: `1px solid ${theme.palette.lightash}`,
    marginTop: theme.spacing(2),
  },
  separatorSpan: {
    backgroundColor: theme.palette.white,
    padding: "0 20px",
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.darkash,
    fontWeight: theme.typography.body1.fontWeight,
  },
  leftSideText: {
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(25),
    // add breakpoint for mobile
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(5),
    },
    textAlign: "center",
  },
}));

function SignInSide() {
  const theme = useTheme();
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [input, setInput] = React.useState(null);

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    setIsLoading(true);
    try {
      const { data } = await POST("/auth/sign-in", input);
      console.log(data);
      setAlert(alertMaker(data));

      if (data.status) {
        setIsLoading(false);
        console.log(data);
        localStorage.setItem("x-studiac-access-token", data.token);
        window.location.href = "/";
      }
    } catch (e) {
      setAlert(alertMaker(e.response.data));
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Grid container component="main" style={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{ background: theme.palette.gradients.primary }}
        >
          <Hidden xsDown>
            <Typography
              variant="h2"
              style={{
                color: theme.palette.navyblue,
                padding: theme.spacing(3),
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Studiac
            </Typography>

            <div className={classes.leftSideText}>
              <Typography
                variant="h1"
                style={{ color: theme.palette.navyblue }}
                align="left"
              >
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{
                  color: theme.palette.white,
                  marginTop: theme.spacing(2),
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad.
              </Typography>
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={2} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography
              variant="h2"
              style={{
                color: theme.palette.navyblue,
                marginTop: theme.spacing(2),
              }}
            >
              Sign in
            </Typography>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              {isLoading && <CircularProgress />}
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div style={{ marginTop: theme.spacing(2) }}>
                <TextInputLayout
                  name="email"
                  id="email"
                  type="email"
                  title="Email"
                  onInputChange={onInputChange}
                />
              </div>
              <div style={{ marginTop: theme.spacing(2) }}>
                <TextInputLayout
                  name="password"
                  id="password"
                  type="password"
                  title="Password"
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
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{ marginTop: theme.spacing(1), cursor: "pointer" }}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/forgot-password");
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Grid>
                {/* Separator */}
                <div className={classes.separatorRoot}>
                  <span className={classes.separatorSpan}>OR</span>
                </div>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  className={classes.buttonSecondary}
                  style={{ marginTop: theme.spacing(3) }}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate("/sign-up");
                  }}
                >
                  Create an account
                </Button>

                {alert && (
                  <Alert
                    severity={alert.severity}
                    title={alert.title}
                    message={alert.message}
                  />
                )}

                <Hidden smUp>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{
                      marginTop: theme.spacing(1),
                      cursor: "pointer",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/");
                    }}
                  >
                    Return to home
                  </Typography>
                </Hidden>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default SignInSide;
