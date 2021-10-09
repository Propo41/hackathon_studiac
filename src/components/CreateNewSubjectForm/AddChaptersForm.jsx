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

// const onInputChange = (event) => {
//   const { value, name } = event.target;
//   setFormInput((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));

//   console.log(form);
// };

const AddChaptersForm = () => {
  const classes = useStyles();
  const { control } = useFormContext();

  const [form, setFormInput] = useState(null);
  const [openVideo, setOpenVideo] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const [chapters, setChapters] = useState("");
  const [lessons, setLessons] = useState("");

  const onClickAddMaterial = () => {
    setOpenMaterial(true);
  };

  const onClickAddVideo = () => {
    setOpenVideo(true);
  };

  const onClickAddChapter = () => {
    console.log(form);
    const newChapters = [...chapters, form];
    setChapters(newChapters);
  };

  const addVideo = (video) => {
    console.log(video);
    const newLessons = [...lessons, video];
    setLessons(newLessons);
  };

  const addMaterial = (material) => {
    console.log(material);
    const newLessons = [...lessons, material];
    setLessons(newLessons);
  };

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setOpenVideo(false);
    setOpenMaterial(false);
  };

  return (
    <Card component="form" className="rounded-card">
      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="ENTER CHAPTER IMAGE URL"
          type="text"
          onInputChange={onInputChange}
          name="image"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="ENTER TITLE"
          type="text"
          onInputChange={onInputChange}
          name="title"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="ENTER CHAPTER NUMBER"
          type="text"
          // value={profileInfo.contact}
          onInputChange={onInputChange}
          name="number"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="description"
          placeholder="ENTER DESCRIPTION"
          type="text"
          // value={profileInfo.contact}
          onInputChange={onInputChange}
          name="description"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <Typography variant="h5" gutterBottom>
          Lessons
        </Typography>
      </div>

      {/* Lessons */}
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <List className={classes.list}>
          {lessons &&
            lessons.map((item, index) => {
              return (
                <>
                  {/* @TODO: append lessonNumber accordingly while sending data to server */}
                  {console.log(item.name)}
                  <ListItemLesson
                    key={index}
                    video={item}
                    lessonNumber={index + 1}
                  />
                </>
              );
            })}
        </List>
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.buttonOrange}
            onClick={onClickAddVideo}
          >
            ADD VIDEO
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.buttonPurple}
            onClick={onClickAddMaterial}
          >
            ADD MATERIAL
          </Button>
        </div>
        <div style={{ marginTop: "var(--margin-item-spacing)" }}>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.buttonGreen}
            onClick={onClickAddChapter}
          >
            ADD CHAPTER
          </Button>
        </div>
        <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
          <Typography variant="h5" gutterBottom>
            Chapters Added
          </Typography>
        </div>
        {/* Chapters */}
        <div style={{ marginTop: "var(--margin-item-spacing)" }}>
          <List className={classes.list}>
            {chapters &&
              chapters.map((item, index) => {
                return (
                  <>
                    {console.log(item.name)}
                    <ListItemChapter key={index} chapter={item} />
                  </>
                );
              })}
          </List>
        </div>

        {/* Video modal */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openVideo}
          onClose={handleClose}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          hideBackdrop={false}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openVideo}>
            <div>
              <AddVideoModal addVideo={addVideo} />
            </div>
          </Fade>
        </Modal>
        {/* Material modal */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openMaterial}
          onClose={handleClose}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          hideBackdrop={false}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openMaterial}>
            <div>
              <AddMaterialModal addMaterial={addMaterial} />
            </div>
          </Fade>
        </Modal>
      </div>
    </Card>
  );
};

export default AddChaptersForm;
