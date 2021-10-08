import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, Typography } from "@material-ui/core";
import iconMapper from "../../utils/icon_mapper";
import { useTheme } from "@material-ui/styles";
import MarkdownViewer from "../MarkdownViewer";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.lightash,
  },
  column: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0),
  },
}));

function createData(type, name, duration) {
  const empty1 = { empty2: true };
  const empty2 = { empty3: true };

  return { type, name, empty1, empty2, duration };
}

/**
 * @param {Array} lessons contains a list of lessons holding 2 values each: type name and duration, type can be video or material
 * @param {String} contentType the type of the content, can be FAQ or Syllabus
 * @param {String} body applicable ff content type is FAQ */
export default function TableList(props) {
  const classes = useStyles();
  const theme = useTheme();

  if (props.contentType === "FAQ") {
    return (
      <div style={{ marginLeft: theme.spacing(4) }}>
        <MarkdownViewer content={props.body} />
      </div>
    );
  } else {
    const { lessons } = props;

    if (lessons) {
      // call createData function for each lesson
      const rows = lessons.map((lesson) => {
        // todo: add duration to database and api
        return createData(lesson.type, lesson.name, "");
      });

      return (
        <TableContainer component={Paper} elevation={0}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.cell}
                    style={{ paddingRight: 0 }}
                  >
                    <div style={{ paddingLeft: theme.spacing(2) }}>
                      {row.type === "video"
                        ? iconMapper("video", theme.palette.darkash)
                        : iconMapper("material", theme.palette.darkash)}
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={classes.column}
                      style={{
                        paddingLeft: theme.spacing(0),
                        marginLeft: -100,
                      }}
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
}
