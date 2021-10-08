import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    height: "20px",
    borderBottom: `1px solid ${theme.palette.lightash}`,
  },
  span: {
    backgroundColor: theme.palette.white,
    padding: "0 20px",
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.navyblue,
    fontWeight: theme.typography.h4.fontWeight,
  },
}));

/**
 * @param {string} title
 */
const Separator = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.span}>{title}</span>
    </div>
  );
};

export default Separator;
