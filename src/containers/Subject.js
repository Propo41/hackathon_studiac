import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// components
import Page from "../components/Page";
import Label from "../components/Label";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";
import {
  ApplicantListHead,
  ApplicantListToolbar,
  ApplicantMoreMenu,
} from "../components/applicant";

import { useQuery } from "@apollo/client";
import { VIEW_SUBJECTS } from "../graphql/queries";

const TABLE_HEAD = [
  { id: "id", label: "Id", alignRight: false },
  { id: "title", label: "Title", alignRight: false },

  { id: "classname", label: "Class", alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

var subject = [
  {
    id: 123,
    title: "ahnaf@gmail.com",

    Class: "pagol",
  },
  {
    id: 124,
    title: "ahnaf@gmail.com",

    Class: "pagol",
  },
  {
    id: 125,
    title: "ahnaf@gmail.com",

    Class: "pagol",
  },
];

export default function Subject(props) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("contactEmail");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { loading, error, data } = useQuery(VIEW_SUBJECTS);

  if (loading) return <div>Loading</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);

  subject = data.Subject;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = subject.map((n) => n.contactEmail);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - subject.length) : 0;

  const isApplicantNotFound = subject.length === 0;

  if (loading) {
    return <h>Loading</h>;
  }

  return (
    <Page title="Applicants | Admin">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            SUBJECTS
          </Typography>
        </Stack>

        <Card>
          <ApplicantListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ApplicantListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={subject.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {subject
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, title, Class } = row;
                      const isItemSelected = selected.indexOf(id) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox"></TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography
                                variant="subtitle2"
                                noWrap
                                style={{ marginLeft: "15px" }}
                              >
                                {id}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{title}</TableCell>

                          <TableCell align="left">{Class.name}</TableCell>

                          <TableCell align="right">
                            <ApplicantMoreMenu applicant={row} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isApplicantNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={subject.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
