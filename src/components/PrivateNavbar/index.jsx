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
import LogoutComponent from "../LogoutComponent";
import { Avatar } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { VIEW_NAVBAR_CONTENT } from "../../graphql/queries";
import Loading from "../Loading";
import ErrorPage from "../../pages/ErrorPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginRight: 50,
    [theme.breakpoints.down("xs")]: {
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
    marginLeft: "auto",
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

  logoutContainer: {
    justifyItems: "center",
    display: "grid",
    padding: "1rem 3rem",
  },
}));

var userInfo = {
  name: "Ahnaf",
  email: "ahnaf@aust.ecom",
  image:
    "https://avatars3.githubusercontent.com/u/52709853?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
};

const PrivateNavbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  // const mobileViewBreakpoint = useMediaQuery("(max-width: 599px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(VIEW_NAVBAR_CONTENT);

  if (loading) return <></>;
  if (error) {
    console.log(error);
    return <ErrorPage description={error.message} />;
  }
  userInfo = data.User[0];
  console.log(userInfo.profile.image);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const handleLogOut = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
    localStorage.clear();
    window.location.href = "/";
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
              <MenuIcon
                style={{
                  width: "1.4em",
                  height: "1.4em",
                  color: theme.palette.darkash,
                }}
              />
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
              <div
                style={{
                  backgroundColor: theme.palette.lightash,
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <div className={classes.logoutContainer}>
                  <Avatar
                    alt="company image"
                    src={userInfo.profile.image}
                    className={classes.large}
                  />
                  <h1 className={classes.userInfoText}>{userInfo.name}</h1>
                  <h1
                    className={classes.userInfoText}
                    style={{
                      fontSize: "var(--font-size-dialog-content",
                    }}
                  >
                    {userInfo.email}
                  </h1>
                </div>
              </div>
              <MenuItem
                onClick={handleClose}
                style={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/" className={classes.navbar}>
                  <Typography variant="body1" className={classes.navbar}>
                    Home
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem
                onClick={handleClose}
                style={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/my-subjects" className={classes.navbar}>
                  <Typography variant="body1" className={classes.navbar}>
                    My Subjects
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem
                className="navbar-button"
                onClick={handleLogOut}
                style={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                  justifyContent: "center",
                  color: theme.palette.red,
                  fontSize: theme.typography.h6.fontSize,
                  fontWeight: "bold",
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div className={classes.headerOptions}>
            <Button style={{ backgroundColor: "transparent" }}>
              <Link className={classes.navbar} to="/">
                Home
              </Link>
            </Button>
            <Button style={{ backgroundColor: "transparent" }}>
              <Link className={classes.navbar} to="/my-subjects">
                My Subjects
              </Link>
            </Button>

            <div className={classes.rightToolbar}>
              <LogoutComponent
                avatar={userInfo.profile.image}
                name={userInfo.name}
                email={userInfo.email}
              />
            </div>
            {/* filled input */}
          </div>
        )}
      </Toolbar>
    </div>
  );
};

export default PrivateNavbar;
