import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.lightash2,
  },
  column: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(0),
  },
}));

/**
 * @param {String} name
 * @param {String} duration
 */
function createData(name, duration) {
  const empty = { empty1: true };
  const empty1 = { empty2: true };
  const empty2 = { empty3: true };

  return { name, empty, empty1, empty2, duration };
}

/**
 * @param {Array} lessons contains a list of lessons holding 2 values each: name and duration
 */
export default function TableList({ lessons }) {
  const classes = useStyles();

  if (lessons) {
    // call createData function for each lesson
    const rows = lessons.map((lesson) => {
      return createData(lesson.name, lesson.duration);
    });

    return (
      <TableContainer component={Paper} elevation={0}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.column}
                  >
                    {row.name}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.column}
                  >
                    {row.duration}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
