import { Avatar, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // center
    textAlign: "center",
    width: theme.spacing(28),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    display: "inline-block",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    color: theme.palette.black,
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  subtitle: {
    color: theme.palette.darkash,
    marginBottom: theme.spacing(1),
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  body: {
    color: theme.palette.darkash,
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
}));

/**
 * @param {string} title
 * @param {string} subtitle [optional]
 * @param {string} body
 * @param {string} image
 */
const AvatarProfile = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Avatar alt={props.title} src={props.image} className={classes.avatar}>
        {props.title.slice(0, 1)}
      </Avatar>
      <Typography variant="h6" className={classes.title} disa>
        {props.title}
      </Typography>
      {props.subtitle && (
        <Typography variant="h6" className={classes.subtitle}>
          {props.subtitle}
        </Typography>
      )}
      <Typography variant="body1" className={classes.body}>
        {props.body}
      </Typography>
    </Paper>
  );
};

export default AvatarProfile;
