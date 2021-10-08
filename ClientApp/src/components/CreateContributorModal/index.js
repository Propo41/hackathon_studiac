import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextInputLayout from "../TextInputLayout";
import SelectTextInputLayout from "../SelectTextInputLayout";
import Alert from "../AlertCustom";
import SnackbarCustom from "../SnackbarCustom";
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
    backgroundColor: "var(--purple)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
}));

const dummydata = ["student", "admin"];

const CreateContributorModal = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [form, setFormInput] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const [districtList, setDistrictList] = React.useState(null);
  const [categoryList, setCategoryList] = React.useState(dummydata);
  const [loadingBar, setLoadingBar] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(null);

  // useEffect(() => {
  //   // setLoadingBar(true);
  //   setLoading(true);
  //   const promise1 = new Promise((resolve, reject) => {
  //     const exe = async () => {
  //       try {
  //         const { data } = await GET("admin/company-categories");
  //         console.log(data);
  //         setCategoryList(data.companyCategories);
  //         resolve();
  //       } catch (e) {
  //         reject();
  //       }
  //     };
  //     exe();
  //   });

  //   const promise2 = new Promise((resolve, reject) => {
  //     const exe = async () => {
  //       try {
  //         const { data } = await GET("admin/districts");
  //         console.log(data);
  //         setDistrictList(data.districts);
  //         resolve();
  //       } catch (e) {
  //         reject();
  //       }
  //     };
  //     exe();
  //   });

  //   Promise.all([promise1, promise2])
  //     .then((values) => {
  //       console.log("all promises resolved");
  //       setFormInput(props.company);
  //       props.company.description
  //         ? setDescription(props.company.description)
  //         : setDescription("Enter your company description");
  //       setLoading(false);
  //       // setLoadingBar(false);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       setLoading(false);
  //       // setLoadingBar(false);
  //       /*  if (error) {
  //       setAlert(errorHandling(error));
  //     } */
  //     });
  // }, []);

  const onFormSubmit = async (event) => {
    try {
      var formData = new FormData();
      formData.append("id", props.company.id);
      formData.append("category", form.category);
      formData.append("contact", form.contact);
      formData.append("description", description);
      formData.append("name", form.name);
      formData.append("officeAddress", form.officeAddress);
      formData.append("district", form.district);

      // sending the form input to server
      const res = await POST_AUTH(`admin/company/profile`, formData);
      setAlert(null);
      setLoading(false);
      console.log(res.data);
      window.scrollTo(0, 0);
      window.location.reload();
      setSnackbar({
        open: true,
        message: "Profile updated successfully!",
        severity: "success",
        duration: 3000,
      });
    } catch (error) {
      setLoading(false);
      // setLoadingBar(false);
      if (error.response) {
        setAlert(errorHandling(error));
      }
    }
  };

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
    <Paper elevation={5} className={classes.paper}>
      {snackbar && snackbar.open && (
        <SnackbarCustom
          severity={snackbar.severity}
          open={snackbar.open}
          message={snackbar.message}
          setSnackbar={setSnackbar}
          duration={snackbar.duration}
        />
      )}
      <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
        Create Contributor
      </Typography>
      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <TextInputLayout
          icon="company"
          placeholder="User name"
          type="text"
          onInputChange={onInputChange}
          name="name"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="Email"
          type="text"
          onInputChange={onInputChange}
          name="email"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <TextInputLayout
          icon="phone"
          placeholder="Password"
          type="text"
          onInputChange={onInputChange}
          name="password"
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <SelectTextInputLayout
          icon="company"
          placeholder="Select Role"
          list={categoryList}
          onInputChange={onInputChange}
          name="category"
          setSelectedValue={setFormInput}
        />
      </div>

      <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.buttonPurple}
          onClick={onFormSubmit}
        >
          CREATE
        </Button>
      </div>
      {alert && alert.status && (
        <Alert
          severity={alert.severity}
          title={alert.title}
          message={alert.message}
        />
      )}
    </Paper>
  );
};

export default CreateContributorModal;
