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
import { useQuery } from "@apollo/client";
import { VIEW_RECEIPTS } from "../graphql/queries";

const TABLE_HEAD = [
  { id: "id", label: "User Id", alignRight: false },
  { id: "phoneNumber", label: "Phone Number", alignRight: false },
  { id: "transactionId", label: "Transaction ID", alignRight: false },
  { id: "paymentMethod", label: "Payment Method", alignRight: false },
  { id: "amountSent", label: "Amount Sent", alignRight: false },
  { id: "Class", label: "Class", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
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

var receipt = [];
export default function Receipt(props) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("contactEmail");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { loading, error, data } = useQuery(VIEW_RECEIPTS);

  if (loading) return <div>Loading</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);

  receipt = data.Reciept;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = receipt.map((n) => n.contactEmail);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - receipt.length) : 0;

  const isReportNotFound = receipt.length === 0;

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
                  rowCount={receipt.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {receipt
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        Payment,

                        total,
                        Class,
                        is_processed,
                      } = row;
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

                          <TableCell align="left">
                            {Payment && Payment.phone_number}
                          </TableCell>
                          <TableCell align="left">
                            {Payment && Payment.transaction_id}
                          </TableCell>
                          <TableCell align="left">
                            {Payment && Payment.payment_gateway}
                          </TableCell>
                          <TableCell align="left">{total}</TableCell>
                          <TableCell align="left">{Class.name}</TableCell>

                          <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={
                                (is_processed === false && "error") || "success"
                              }
                            >
                              {sentenceCase(
                                is_processed === true
                                  ? "Approved"
                                  : "Not Approved"
                              )}
                            </Label>
                          </TableCell>
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
            count={receipt.length}
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
