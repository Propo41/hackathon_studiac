import { useTheme } from "@material-ui/core";
import { Typography, Hidden, Grid, Button } from "@material-ui/core";

const Header = (props) => {
  const theme = useTheme();

  return (
    <Grid container style={{ paddingTop: 72, height: theme.spacing(52) }}>
      <Grid item xs={12} md={8}>
        <Typography variant="h1" style={{ color: theme.palette.navyblue }}>
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          style={{ color: theme.palette.white, marginTop: theme.spacing(2) }}
        >
          {props.subtitle}
        </Typography>
        
      </Grid>
      <Grid item xs={12} md={4}>
        <Hidden smDown>
          <img
            src={props.image}
            alt="landing page"
            className={props.classes.landingImage}
          />
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default Header;