import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginRight: 50,
    [theme.breakpoints.down("720")]: {
      flexGrow: 1,
    },
  },
  logoText: {
    color: theme.palette.navyblue,
    textDecoration: "none",
  },
  logoSize: {
    width: 60,
    height: 60,
    cursor: "pointer",
  },
  headerOptions: {
    display: "contents",
  },
  rightToolbar: {
    display: "flex",
    // marginLeft: "auto",
  },
  navbar: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 400,
    color: theme.palette.darkash,
    margin: "0 0.5rem !important",
    "&:hover": {
      color: theme.palette.black,
    },
    textDecoration: "none",
    textTransform: "none",
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
    margin: "0 2rem",
    padding: "0.5rem 1rem",
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
}));

const PublicNavbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 720px)");
  // const mobileViewBreakpoint = useMediaQuery("(max-width: 599px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const handlePostJob = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
    navigate("/sign-in");
  };

  return (
    <div className={classes.root}>
      <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* Place brand logo here */}
        <Typography variant="h2" className={classes.title}>
          <Link to="/" className={classes.logoText}>
            Studiac
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon style={{ width: "1.4em", height: "1.4em" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
              >
                <Link to="/subjects" className={classes.navbar}>
                  <Typography variant="h2" className={classes.navbar}>
                    Subjects
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
              >
                <Link to="/about" className={classes.navbar}>
                  <Typography variant="h2" className={classes.navbar}>
                    About
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem className="navbar-button" onClick={handlePostJob}>
                POST A JOB
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div className={classes.headerOptions}>
            <Button style={{ backgroundColor: "transparent" }}>
              <Link className={classes.navbar} to="/subjects">
                Subjects
              </Link>
            </Button>
            <Button
              style={{ backgroundColor: "transparent", marginRight: "auto" }}
            >
              <Link className={classes.navbar} to="/about">
                About
              </Link>
            </Button>

            {/* outlined button */}
            <div className={classes.rightToolbar}>
              <Button
                variant="outlined"
                className={classes.buttonSecondary}
                disableElevation
              >
                <Link
                  to="/sign-up"
                  style={{ textDecoration: "none", color: theme.palette.green }}
                >
                  Join for free
                </Link>
              </Button>
            </div>
            {/* filled input */}
            <div className={classes.rightToolbar}>
              <Button
                variant="contained"
                className={classes.buttonPrimary}
                disableElevation
              >
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Toolbar>
    </div>
  );
};

export default PublicNavbar;
