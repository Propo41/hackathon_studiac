import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextInputLayout from "../TextInputLayout";
import MarkdownEditor from "../MarkdownEditor";
import { Button } from "@material-ui/core";
import { DELETE_AUTH, GET, GET_AUTH, POST_AUTH } from "../../api/api";
import errorHandling from "../../utils/error_handling";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "var(--body-color)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 6, 4),
    borderRadius: 10,
    margin: "0 7rem",
    position: "relative",
  },
  buttonPurple: {
    backgroundColor: "var(--light-purple)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    marginRight: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
  buttonOrange: {
    backgroundColor: "var(--orange-light)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    marginRight: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
}));

const AddMaterialModal = ({ addMaterial }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [form, setFormInput] = React.useState(null);

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <Typography variant="h5" gutterBottom>
        Loading...
      </Typography>
    );
  }

  return (
    <Paper component="form" elevation={5} className={classes.paper}>
      <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
        Add Video
      </Typography>
      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <TextInputLayout
          icon="company"
          placeholder="Enter material title"
          type="text"
          onInputChange={onInputChange}
          name="title"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="company"
          placeholder="Enter URL"
          type="text"
          onInputChange={onInputChange}
          name="materialUrl"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="Enter file type"
          type="text"
          onInputChange={onInputChange}
          name="fileType"
        />
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.buttonOrange}
          onClick={() =>
            addMaterial({
              title: form.title,
              url: form.materialUrl,
              fileType: form.fileType,
              type: "material",
            })
          }
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
};

export default AddMaterialModal;
