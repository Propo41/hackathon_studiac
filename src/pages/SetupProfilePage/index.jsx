import {
  AppBar,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core";
import TextInputLayout from "../../components/TextInputLayout";
import { useNavigate } from "react-router";
import alertMaker from "../../utils/alertMaker";
import { POST, POST_AUTH } from "../../api/api";
import Alert from "../../components/AlertCustom";
import SelectTextInputLayout from "../../components/SelectTextInputLayout";
import Loading from "../../components/Loading";

/* 

TODO: use "@material-ui/pickers" for date picker
ref: https://material-ui-pickers.dev/demo/datepicker#static-mode 
TODO: make some of the input fields to drop down later on

*/

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
    backgroundColor: theme.palette.lightash2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
}));

const AppBarComponent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const onLogoutClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        backgroundColor: theme.palette.lightash2,
        padding: theme.spacing(1),
      }}
    >
      <Toolbar>
        <Typography variant="h4" className={classes.title} color="textPrimary">
          Studiac
        </Typography>
        <Button
          color="primary"
          style={{
            color: theme.palette.purple,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{
              textTransform: "none",
            }}
            onClick={onLogoutClick}
            color="textPrimary"
          >
            Logout
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const classList = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const designationList = ["Student", "Teacher", "Institution"];

const mediumList = ["Bangla Medium", "English Version"];

const SetupProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();

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

    console.log(input);

    try {
      console.log(localStorage.getItem("x-studiac-access-token"));
      const { data } = await POST_AUTH("/user/create-profile", input);
      console.log(data);

      setAlert(alertMaker(data));

      if (data.status) {
        // make a toast
        setIsLoading(false);
        localStorage.setItem("is-profile", "true");
        window.location.href = "/";
      }
    } catch (e) {
      setAlert(alertMaker(e.response.data));
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className={classes.appbar}>
        <AppBarComponent />
      </div>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          className={classes.paper}
        >
          <Typography
            variant="h2"
            align="center"
            style={{
              marginBottom: theme.spacing(3),
              marginTop: theme.spacing(2),
            }}
          >
            Setup Profile
          </Typography>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {isLoading && <CircularProgress />}
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="fullName"
                  id="name"
                  type="text"
                  title="Full Name"
                  onInputChange={onInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="phone"
                  id="phone"
                  type="number"
                  title="Phone"
                  onInputChange={onInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="address"
                  id="address"
                  type="text"
                  title="Address"
                  onInputChange={onInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <SelectTextInputLayout
                  title="Designation"
                  name="designation"
                  icon="map"
                  placeholder="Select Designation"
                  value={null}
                  onInputChange={onInputChange}
                  list={designationList}
                  setSelectedValue={setInput}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <SelectTextInputLayout
                  icon="map"
                  placeholder="Select Class"
                  value={null}
                  onInputChange={onInputChange}
                  list={classList}
                  name="class"
                  title="Class"
                  setSelectedValue={setInput}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="dob"
                  id="dob"
                  type="date"
                  title="Date of Birth"
                  onInputChange={onInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <SelectTextInputLayout
                  icon="map"
                  placeholder="Select Medium"
                  value={null}
                  onInputChange={onInputChange}
                  list={mediumList}
                  name="medium"
                  title="Medium"
                  setSelectedValue={setInput}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="institution"
                  id="institution"
                  type="text"
                  title="Institution"
                  onInputChange={onInputChange}
                />
              </div>
            </Grid>
          </Grid>

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
            Create Profile
          </Button>

          {alert && (
            <Alert
              severity={alert.severity}
              title={alert.title}
              message={alert.message}
            />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default SetupProfilePage;
