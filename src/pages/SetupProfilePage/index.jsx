import {
  AppBar,
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

  const onLogoutClick = () => {};
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

const SetupProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();

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

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Full Name" id="name" type="text" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Phone" id="phone" type="number" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Address" id="address" type="text" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="Designation"
                  id="designation"
                  type="text"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Class" id="class" type="text" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Date of Birth" id="dob" type="date" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout name="Medium" id="medium" type="text" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginTop: theme.spacing(1) }}>
                <TextInputLayout
                  name="Institution"
                  id="institution"
                  type="text"
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
          >
            Create Profile
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default SetupProfilePage;
