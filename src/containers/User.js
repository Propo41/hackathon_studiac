import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import Label from "../components/Label";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";
import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from "../components/user";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import USERS from "../_mocks_/user";
import { DELETE_AUTH, GET, GET_AUTH } from "../api/api";
import CreateUserModal from "../components/CreateUserModal";
import { useQuery } from "@apollo/client";
import { VIEW_USERS } from "../graphql/queries";

const TABLE_HEAD = [
  { id: "id", label: "Id", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "username", label: "Username", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "createdat", label: "Created at", alignRight: false },
  { id: "isVerified", label: "Verified", alignRight: false },
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
      (_user) => _user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}
var users = [
  {
    id: 123,
    email: "ahnaf@gmail.com",
    username: "ahnaf",
    role: "pagol",
    createdat: "12/2/40",
    isVerified: true,
  },
  {
    id: 124,
    email: "ahnaf@gmail.com",
    username: "ahnaf",
    role: "pagol",
    createdat: "12/2/40",
    isVerified: true,
  },
  {
    id: 125,
    email: "ahnaf@gmail.com",
    username: "ahnaf",
    role: "pagol",
    createdat: "12/2/40",
    isVerified: true,
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 6, 4),
  },
}));

export default function User() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("email");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editUser, setEditUser] = useState(false);
  const [open, setOpen] = useState(false);

  const { loading, error, data } = useQuery(VIEW_USERS);

  if (loading) return <div>Loading</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);

  users = data.User;

  const onNewClick = () => {
    console.log("Clicked");
    setOpen(true);
  };

  const onEditClick = async (id) => {
    console.log("on edit click");
    console.log(id);
    setEditUser(true);
  };

  if (loading) {
    return <h>Loading</h>;
  }

  if (editUser) {
    return <h1>Edit</h1>;
  }

  return (
    <Page title="User | Admin">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
            onClick={onNewClick}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={users.length}
                  numSelected={selected.length}
                />
                <TableBody>
                  {users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        email,
                        username,
                        role,
                        createdat,
                        isVerified,
                      } = row;
                      const isItemSelected = selected.indexOf(email) !== -1;

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
                          <TableCell align="left">{id}</TableCell>
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
                                {email}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{username}</TableCell>
                          <TableCell align="left">{role}</TableCell>
                          <TableCell align="left">{createdat}</TableCell>
                          <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={
                                (isVerified === false && "error") || "success"
                              }
                            >
                              {sentenceCase(isVerified === true ? "Yes" : "No")}
                            </Label>
                          </TableCell>
                          <TableCell align="right">
                            <UserMoreMenu onEditClick={onEditClick} id={id} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        </Card>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        hideBackdrop={false}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <CreateUserModal />
          </div>
        </Fade>
      </Modal>
    </Page>
  );
}
