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

const AddVideoModal = ({ addVideo }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [form, setFormInput] = React.useState(null);
  const [video, setVideo] = React.useState(null);

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
          placeholder="Enter video title"
          type="text"
          onInputChange={onInputChange}
          name="title"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="company"
          placeholder="Enter thumbnail"
          type="text"
          onInputChange={onInputChange}
          name="thumbnail"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="Enter Video URL"
          type="text"
          onInputChange={onInputChange}
          name="videoUrl"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="Enter duration"
          type="text"
          onInputChange={onInputChange}
          name="duration"
        />
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.buttonOrange}
          onClick={() =>
            addVideo({
              title: form.title,
              preview: form.thumbnail,
              videoUrl: form.videoUrl,
              duration: form.duration,
              type: "video",
            })
          }
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
};

export default AddVideoModal;
