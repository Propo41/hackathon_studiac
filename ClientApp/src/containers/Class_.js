import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { sentenceCase } from "change-case";
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
  ReportListHead,
  ReportListToolbar,
  ReportMoreMenu,
} from "../components/report";

import { DELETE_AUTH, GET, GET_AUTH } from "../api/api";

const TABLE_HEAD = [
  { id: "id", label: "Id", alignRight: false },
  { id: "classname", label: "Class Name", alignRight: false },
  { id: "colorCode", label: "Color Code", alignRight: false },
  { id: "fee", label: "Fee", alignRight: false },
  { id: "discount", label: "Discount", alignRight: false },
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

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) =>
        _user.contactEmail.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

const dummydata = [
  {
    id: 123,
    classname: "ahnaf",
    colorCode: "pagol",
    fee: 500,
    discount: 1000,
  },
  {
    id: 124,
    classname: "ahnaf",
    colorCode: "pagol",
    fee: 500,
    discount: 1000,
  },
  {
    id: 125,
    classname: "ahnaf",
    colorCode: "pagol",
    fee: 500,
    discount: 1000,
  },
];
export default function Class_(props) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("contactEmail");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [reports, setReports] = useState(dummydata);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   let isMounted = true;
  //   const exe = async () => {
  //     try {
  //       const { data } = await GET_AUTH(`admin/reports`);
  //       if (isMounted) {
  //         setReports(data);
  //         console.log("all promises resolved");
  //         console.log(data);
  //         setLoading(false);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       console.log("error", e);
  //       setLoading(false);
  //     }
  //   };
  //   exe();
  //   return () => {
  //     isMounted = false;
  //   }; // cleanup toggles value, if unmounted
  // }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = reports.map((n) => n.contactEmail);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reports.length) : 0;

  const filteredReports = applySortFilter(
    reports,
    getComparator(order, orderBy),
    filterName
  );

  const isReportNotFound = filteredReports.length === 0;

  if (loading) {
    return <h>Loading</h>;
  }

  return (
    <Page title="Reports | Admin">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            RECEIPTS
          </Typography>
        </Stack>

        <Card>
          <ReportListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ReportListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={reports.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredReports
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, classname, colorCode, fee, discount } = row;
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
                          <TableCell align="left">{classname}</TableCell>
                          <TableCell align="left">{colorCode}</TableCell>
                          <TableCell align="left">{fee}</TableCell>
                          <TableCell align="left">{discount}</TableCell>

                          <TableCell align="right">
                            <ReportMoreMenu report={row} />
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
                {isReportNotFound && (
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
            count={reports.length}
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
