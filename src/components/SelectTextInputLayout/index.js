import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import iconMapper from "../../utils/icon_mapper";
import { useState } from "react";
import { Button, Select, TextField, Typography } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { ClickAwayListener, Grow, MenuList, Popper } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightash2,
    color: theme.palette.darkash,
    borderRadius: 4,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    textTransform: "none",
    padding: theme.spacing(2),
  },
  label: {
    color: theme.palette.darkash,
  },
}));

/**
 *
 * @param {string} value? the default value. Could be null
 * @param {string} placeholder the placeholder to be shown
 * @param {hook} setSelectedValue a hook function that sets the selected value from  the dropdown
 * @param {string} name the name of the input field, ie district or category
 */
const SelectTextInputLayout = (props) => {
  //  const [value, setValues] = useState(props.value ? props.value : "");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const [value, setValue] = React.useState(
    props.value ? props.value : props.placeholder
  );

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const onClickAway = (event) => {
    console.log(event.target);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Typography variant="h6" className={classes.label}>
        {props.title}
      </Typography>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.root}
        fullWidth={true}
      >
        {value}
        <KeyboardArrowDownIcon style={{ marginLeft: "auto" }} />
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        style={{ zIndex: 5 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={onClickAway}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {props.list &&
                    props.list.map((item, index) => (
                      <MenuItem
                        key={index}
                        onClick={(event) => {
                          setValue(item);
                          props.setSelectedValue((prevState) => ({
                            ...prevState,
                            [props.name]: item,
                          }));

                          console.log(event.target);
                          if (
                            anchorRef.current &&
                            anchorRef.current.contains(event.target)
                          ) {
                            return;
                          }

                          setOpen(false);
                        }}
                        name="Monkey"
                      >
                        {item}
                      </MenuItem>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default SelectTextInputLayout;
