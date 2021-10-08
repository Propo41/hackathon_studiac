import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AvatarProfile from "../../components/AvatarProfile";
import Dropdown from "../../components/Dropdown";
import Subject from "../../components/Subject";
import SubjectFeatured from "../../components/SubjectFeatured";
import SubjectInstructor from "../../components/SubjectInstructor";
import TextInputLayout from "../../components/TextInputLayout";
import TableList from "../../components/TableList";
import AvailPositionCard from "../../components/ExpandableList";
import ExpandableList from "../../components/ExpandableList";
import Separator from "../../components/Separator";

// TODO: add carousel https://github.com/Trendyol/react-carousel

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.white,
  },
  buttonPrimary: {
    backgroundColor: theme.palette.orangelight,
    "&:hover": {
      backgroundColor: theme.palette.orange,
    },
    color: theme.palette.navyblue,
    fontSize: theme.typography.h3.fontSize,
    textTransform: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  buttonSecondary: {
    borderColor: theme.palette.lightgreen,
    "&:hover": {
      borderColor: theme.palette.green,
    },
    color: theme.palette.green,
    fontSize: theme.typography.h3.fontSize,
    textTransform: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const rows = [
  { name: "Frozen yoghurt", duration: "45:00" },
  { name: "Frozen yoghurt", duration: "45:00" },
  { name: "Frozen yoghurt", duration: "45:00" },
  { name: "Frozen yoghurt", duration: "45:00" },
  { name: "Frozen yoghurt", duration: "45:00" },
];

const Components = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Components</Typography>
      {/* filled input */}
      <Button
        variant="contained"
        className={classes.buttonPrimary}
        disableElevation
      >
        Join for free
      </Button>
      {/* outlined button */}
      <Button
        variant="outlined"
        className={classes.buttonSecondary}
        disableElevation
      >
        Secondary
      </Button>
      {/* text input */}
      <div style={{ marginTop: "40px" }}>
        <TextInputLayout
          placeholder="Enter company name"
          type="text"
          value={"Hello"}
          name="Email"
        />
      </div>
      <AvatarProfile
        title="Geocasts"
        subtitle="Instructor"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo"
        image="https://pbs.twimg.com/profile_images/1439193742955753475/Sc_LhyES_400x400.jpg"
      />
      <Subject
        title="Chemistry"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        image="https://pbs.twimg.com/profile_images/1439193742955753475/Sc_LhyES_400x400.jpg"
        category="Class 3"
        labelColor="#FFD27A"
      />
      <Dropdown />
      <div style={{ marginTop: "10px" }}>
        <SubjectFeatured
          title="Biology"
          body="l, suspendisse et. Sem purus sed donec odio id nCom varius"
          image="https://pbs.twimg.com/profile_images/1439193742955753475/Sc_LhyES_400x400.jpg"
          category="Class 3"
          labelColor="#FFD27A"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <SubjectInstructor
          title="Biology"
          image="https://pbs.twimg.com/profile_images/1439193742955753475/Sc_LhyES_400x400.jpg"
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <ExpandableList
          lessons={rows}
          title={"Chapter 1: Lorem ipsum"}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Separator />
      </div>
    </div>
  );
};

export default Components;
