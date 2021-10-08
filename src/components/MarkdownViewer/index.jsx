import { makeStyles } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  markdown: {
    color: theme.palette.black,
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    // add breakdowns for mobile
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.body2.fontSize,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
}));

/**
 * @param  {String} content
 */
const MarkdownViewer = (props) => {
  const classes = useStyles();

  return (
    <ReactMarkdown children={props.content} className={classes.markdown} />
  );
};

export default MarkdownViewer;
