import {
  Avatar,
  Box,
  Button,
  Checkbox,
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
  text: {
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(6),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    textAlignLast: "center",
  },
}));

/**
 * @param {string} description
 */
function ErrorPage(props) {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <Grid container component="main" style={{ height: "100vh" }}>
        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          style={{ background: theme.palette.gradients.primary }}
        >
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

          <Box className={classes.text}>
            <Typography
              variant="h1"
              style={{ color: theme.palette.navyblue }}
              align="left"
            >
              Ops...Something is wrong!
            </Typography>
            <Typography
              variant="h5"
              align="left"
              style={{
                color: theme.palette.white,
                marginTop: theme.spacing(2),
              }}
            >
              {props.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default ErrorPage;
