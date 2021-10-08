import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { useState } from "react";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.ash,
    borderRadius: 4,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: theme.palette.darkash,
    padding: theme.spacing(1),
  },
  label: {
    color: theme.palette.darkash,
  },
}));

/**
 * A component that returns the Filled Text Input component
 * @param placeholder A String for the hint text
 * @param type email, file, date, image, text
 * @param readOnly true or false
 * @param rowsMax integer value (optional)
 * @param value String: default value on the input layout
 * @param name String: name of the input, ie email or password
 * @param onInputChange a function passed that handles the input change event
 */
const TextInputLayout = (props) => {
  const classes = useStyles();
  const [value, setValues] = useState(props.value ? props.value : "");

  return (
    <div>
      <Typography variant="h6" className={classes.label}>
        {props.name}
      </Typography>
      <Paper component="form" className={classes.root} elevation={0}>
        <InputBase
          name={props.name}
          className={classes.input}
          placeholder={props.placeholder}
          fullWidth={true}
          onChange={props.onInputChange}
          type={props.type}
          defaultValue={value}
          maxRows={props.rowsMax ? props.rowsMax : 1}
          readOnly={props.readOnly ? props.readOnly : false}
        />
      </Paper>
    </div>
  );
};

export default TextInputLayout;
