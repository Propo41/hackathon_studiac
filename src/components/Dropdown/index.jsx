import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const options = [
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  buttonText: {
    color: theme.palette.black,
  },
  paperRoot: {
    display: "flex",
    width: theme.spacing(30),
    padding: "0.6rem 2rem",
    borderRadius: theme.shape.labelRadius,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: theme.palette.lightash,
    color: theme.palette.darkash,
  },
}));

/**
 * @param  {List<String>} options a list of string
 * @param  {String} currentValue the currently selected value
 * @param  {Function} onFilterSelect a function to be called when the value changes
 */
export default function Dropdown(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = React.useState(
    props.currentValue ? props.currentValue : props.options[0]
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText !== selected) {
      if (event.target.innerText) {
        setSelected(event.target.innerText);
      } else {
        setSelected(selected);
      }

      props.onFilterSelect(event.target.innerText);
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Paper
        className={classes.paperRoot}
        elevation={0}
        onClick={handleClick}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <Typography
          variant="h3"
          style={{ cursor: "pointer", marginRight: "2rem" }}
          color="textPrimary"
        >
          {selected}
        </Typography>

        <KeyboardArrowDownIcon style={{ marginLeft: "auto" }} />
      </Paper>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {props.options.map((option) => (
          <MenuItem
            key={option}
            selected={option === selected}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
