// material
import { Box, Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Paper, Button } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppTotalReports,
  AppApplicants,
  AppJobsPosted,
  AppCompanies,
} from "../components/dashboard";
import { useEffect, useState } from "react";
import TextInputLayout from "../components/TextInputLayout";
import { DELETE_AUTH, GET, GET_AUTH, POST_AUTH } from "../api/api";

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  buttonPurple: {
    backgroundColor: "var(--purple)",
    color: "white",
    fontFamily: "Sen",
    marginTop: 10,
    padding: "var(--button-padding)",
    fontSize: "var(--font-size-button-small)",
  },
}));

export default function DashboardApp() {
  const classes = useStyles();
  const [data, setData] = useState({
    totalCompanies: 10,
    totalJobsPosted: 10,
    totalApplicants: 10,
    totalReports: 10,
  });
  const [content, setContent] = useState({
    title: "Title",
    subtitle: "Sub title",
    aboutUs: "About Us"
  });
  const [loading, setLoading] = useState(false);
  const [form, setFormInput] = useState(null);

  const onSubmitLandingPage = async (event) => {
    try {
      var formData = new FormData();
      formData.append("title", form.title);
      formData.append("subtitle", form.subtitle);
      // sending the form input to server
      const res = await POST_AUTH(`admin/landingpage`, formData);
      setLoading(false);
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onSubmitAboutUs = async (event) => {
    try {
      var formData = new FormData();
      formData.append("aboutUs", form.aboutUs);
      // sending the form input to server
      const res = await POST_AUTH(`admin/about-us`, formData);
      setLoading(false);
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
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
    return <h>Loading</h>;
  }

  return (
    <Page title="Dashboard | Admin">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          {/* START top 4 boxes */}
          <Grid item xs={12} sm={6} md={3}>
            <AppCompanies
              title="Total Companies Registered"
              value={data.totalCompanies}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalReports title="Total Reports" value={data.totalReports} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppJobsPosted
              title="Total Jobs Posted"
              value={data.totalJobsPosted}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppApplicants
              title="Total Applicants"
              value={data.totalApplicants}
            />
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={5} className="rounded-card">
        <Typography variant="h4">Landing Page</Typography>
        <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
          <TextInputLayout
            icon="requirements"
            placeholder="Enter title"
            type="text"
            value={content.title}
            onInputChange={onInputChange}
            name="title"
          />
        </div>
        <div style={{ marginTop: "var(--margin-item-spacing)" }}>
          <TextInputLayout
            icon="requirements"
            placeholder="Enter subtitle"
            type="text"
            value={content.subtitle}
            onInputChange={onInputChange}
            name="subtitle"
          />
        </div>
        <div style={{ marginTop: "var(--margin-item-spacing)" }}>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.buttonPurple}
            onClick={onSubmitLandingPage}
          >
            SAVE CHANGES
          </Button>
        </div>
      </Paper>
      <Paper elevation={5} className="rounded-card">
        <Typography variant="h4">About Us</Typography>
        <div style={{ marginTop: "var(--margin-item-spacing-lg)" }}>
          <TextInputLayout
            icon="description"
            placeholder="Enter about us ..."
            type="text"
            value={content.aboutUs}
            onInputChange={onInputChange}
            name="aboutUs"
          />
        </div>
        <div style={{ marginTop: "var(--margin-item-spacing)" }}>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.buttonPurple}
            onClick={onSubmitAboutUs}
          >
            SAVE CHANGES
          </Button>
        </div>
      </Paper>
    </Page>
  );
}
