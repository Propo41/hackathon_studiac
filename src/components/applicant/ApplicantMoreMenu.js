import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// ----------------------------------------------------------------------
import { DELETE_AUTH } from "../../api/api.js";
import AlertDialog from "../AlertDialog";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ApplicantMoreMenu(props) {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  // delete the applicant
  const onDeleteClick = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAlertContent({
      title: "Are you sure?",
      subtitle:
        "This action is irreversible and will delete the applicant permanently.",
    });
    // open a confirm dialog
    // if the user clicks ok, delete the applicant
    setAlertOpen(true);
  };

  // function to delete applicant
  const deleteApplicant = async () => {
    console.log("deleting..");
    var form = new FormData();
    form.append("id", props.applicant.id);
    try {
      const { data } = await DELETE_AUTH(`admin/applicant/delete`, form);
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.log(e);
      window.location.reload();
    }
  };

  const onAlertClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("alert closed");
    setAlertOpen(false);
  };

  const onAlertConfirm = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAlertOpen(false);
    console.log("alert confirmed");
    const exe = async () => {
      await deleteApplicant();
    };
    exe();
  };

  return (
    <>
      <AlertDialog
        open={alertOpen}
        handleClose={onAlertClose}
        handleConfirm={onAlertConfirm}
        title={alertContent && alertContent.title}
        subtitle={alertContent && alertContent.subtitle}
      />
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem sx={{ color: "text.secondary" }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: "body2" }}
            onFocus={(event) => event.stopPropagation()}
            onClick={onDeleteClick}
          />
        </MenuItem>
      </Menu>
    </>
  );
}