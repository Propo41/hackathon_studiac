import { makeStyles, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

/**
 * A component that returns an alert view
 * @param severity 'error'|'info'|'success'|'warning'
 * @param title title text
 * @param message subtitle text (array)
 */

const _Alert = (props) => {
  const useStyles = makeStyles((theme) => ({
    alert: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      textAlign: "left",
      width: "100%",
    },
    alertTitle: {
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <Alert severity={props.severity} className={classes.alert}>
      <AlertTitle className={classes.alertTitle}>{props.title}</AlertTitle>
      <Typography variant="body2">{props.message}</Typography>
    </Alert>
  );
};
export default _Alert;
