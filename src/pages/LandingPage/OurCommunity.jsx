import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    // add breakpoint styles
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    display: "inline-block",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  itemMargin: {
    // add style for the first child
    "& > *:first-child": {
      marginTop: theme.spacing(0),
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  label: {
    paddingLeft: theme.spacing(1),
  },
}));

export default function OurCommunity({ community }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} alignItems="flex-end">
      {community.map((item, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={12}
          md={12}
          className={classes.itemMargin}
        >
          {/* if index is even  */}
          {index % 2 === 0 && <LeftChild item={item} />}
          {/* if index is odd  */}
          {index % 2 === 1 && <RightChild item={item} />}
        </Grid>
      ))}
    </Grid>
  );
}

const LeftChild = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <div>
        <Avatar alt="Remy Sharp" className={classes.cover} src={item.image} />
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h4" color="textPrimary">
            {item.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {item.body}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

const RightChild = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h4" color="textPrimary" align="right">
            {item.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" align="right">
            {item.body}
          </Typography>
        </CardContent>
      </div>
      <div>
        <Avatar alt="Remy Sharp" className={classes.cover} src={item.image} />
      </div>
    </Card>
  );
};
