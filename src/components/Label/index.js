import { makeStyles, Paper, Typography } from "@material-ui/core";
import iconMapper from "../../utils/icon_mapper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "fit-content",
    padding: "0.3rem 1rem",
    borderRadius: theme.shape.labelRadius,
    justifyContent: "end",
    alignItems: "center",
    backgroundColor: theme.palette.lightash,
    color: theme.palette.darkash,
  },
}));

/**
 * @param {string} color
 * @param {string} icon
 * @param {string} text
 */
const Label = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      {iconMapper(props.icon, props.color, "label")}
      <Typography variant="subtitle1" style={{ marginLeft: "5px" }}>
        {props.text}
      </Typography>
    </Paper>
  );
};
export default Label;
