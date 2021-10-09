import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Typography,
  Button,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SelectContributorDropdown from "../SelectContributorDropdown";
import ListItemContributor from "../ListItemContributor";

const data = {
  contributors: [
    {
      id: "1",
      name: "T",
      designation: "Teacher",
    },
    {
      id: "2",
      name: "A",
      designation: "Singer",
    },
    {
      id: "3",
      name: "S",
      designation: "Star",
    },
  ],
};
const contributors = ["T", "A", "S"];

const useStyles = makeStyles((theme) => ({
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

const AddContributorForm = (props) => {
  const classes = useStyles();
  const { control } = useFormContext();
  const [contributorList, setContributorList] = useState(null);
  const [selectedContributors, setSelectedContributors] = useState("");
  const [form, setFormInput] = useState(null);

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickAdd = async (event) => {
    console.log(form.contributor);
    // const newContributor = {
    //   contributor: form.contributor,
    // };

    const newContributors = [...selectedContributors, form.contributor];
    props.setContributorInfo(newContributors);
    setSelectedContributors(newContributors);
  };

  return (
    <Card component="form" className="rounded-card">
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <SelectContributorDropdown
          icon="user"
          placeholder="SELECT CONTRIBUTOR"
          // value={props.company.category}
          list={data.contributors}
          onInputChange={onInputChange}
          name="contributor"
          setSelectedValue={setFormInput}
        />
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <List className={classes.list}>
          {selectedContributors &&
            selectedContributors.map((item, index) => {
              return (
                <div key={index}>
                  <ListItemContributor key={index} contributor={item} />
                </div>
              );
            })}
        </List>
      </div>
      <div style={{ marginTop: "var(--margin-item-spacing)" }}>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.buttonOrange}
          onClick={onClickAdd}
        >
          ADD MORE
        </Button>
      </div>
    </Card>
  );
};

export default AddContributorForm;
