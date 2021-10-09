import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Avatar,
  Card,
  Stack,
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import TextInputLayout from "../TextInputLayout";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddVideoModal from "../AddVideoModal";
import AddMaterialModal from "../AddMaterialModal";
import ListItemLesson from "../ListItemLesson";
import ListItemChapter from "../ListItemChapter";
import SelectContributorDropdown from "../SelectContributorDropdown";
import SelectClassDropdown from "../SelectClassDropdown";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
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
  buttonGreen: {
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    marginRight: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
  list: {
    backgroundColor: "var(--ash)",
    padding: "1rem 2rem",
    borderRadius: 10,
  },
  listItem: {
    backgroundColor: "var(--lightash)",
    padding: "1rem",
    borderRadius: 10,
  },
}));

const AddSubjectDetailsForm = (props) => {
  const [form, setFormInput] = useState(null);

  const onInputChange = (event) => {
    const { value, name } = event.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    props.setSubjectInfo(form);
  };

  const classList = props.classList;

  return (
    <Card component="form" className="rounded-card">
      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <TextInputLayout
          placeholder="Enter subject title"
          type="text"
          onInputChange={onInputChange}
          name="title"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          placeholder="Enter Image URL"
          type="text"
          onInputChange={onInputChange}
          name="image"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          placeholder="Enter short description"
          type="text"
          onInputChange={onInputChange}
          name="short_description"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          placeholder="Enter Overview"
          type="text"
          onInputChange={onInputChange}
          name="overview"
        />
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          placeholder="Enter Subject Code"
          type="text"
          onInputChange={onInputChange}
          name="subject_code"
        />
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <SelectClassDropdown
          icon="company"
          placeholder="Select Class"
          list={classList}
          value={null}
          onInputChange={onInputChange}
          name="class_id"
          setSelectedValue={setFormInput}
        />
      </div>
    </Card>
  );
};

export default AddSubjectDetailsForm;
