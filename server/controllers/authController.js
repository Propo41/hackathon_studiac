/*
 * deals with authentication: sign in and sign up
 */
import { v4 as uuidv4 } from "uuid";
import request from "request";
import {
  CHECK_PROFILE_COMPLETION,
  VIEW_USER_BY_EMAIL,
} from "../graphql/queries.js";
import { CREATE_USER } from "../graphql/mutations.js";
import bcrypt from "bcryptjs";
import { createJwtToken } from "../helpers/util.js";

const signInController = async (req, res) => {
  /*  await bcrypt.compare(password, user.password) */
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const graphqlReq = {
    query: VIEW_USER_BY_EMAIL,
    variables: {
      email: req.body.email,
    },
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": _hasuraAdminSecret,
      },
      url: _url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      if (error) {
        res.json({ status: false, message: JSON.parse(error) });
      }
      if (body) {
        const { data } = JSON.parse(body);
        if (data.User.length === 0) {
          // user account doesn't exist,
          res.json({
            status: false,
            message:
              "An account with the given email, doesn't exist. Did you enter the correct password?",
          });
        } else {
          const user = data.User[0];

          // user account found
          // now check if password is correct
          if (bcrypt.compareSync(req.body.password, user.password)) {
            // check if user profile is created or not
            // generate jwt token
            const token = createJwtToken({
              id: user.id,
              email: user.email,
              role: user.role,
            });

            isProfileCreated(user, res, token);
          } else {
            res.json({ status: false, message: "Incorrect password entered!" });
          }
        }
      }
    }
  );
};

const isProfileCreated = (user, res, token) => {
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const graphqlReq = {
    query: CHECK_PROFILE_COMPLETION,
    variables: {},
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: _url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      if (error) {
        res.json({ status: false, message: JSON.parse(error) });
      }
      if (body) {
        const { data } = JSON.parse(body);
        if (data.UserProfile.length === 0) {
          // user profile does not exist
          res.json({
            status: true,
            message:
              "You are logged in! Setup your profile first before continuing!",
            token: token,
            isProfileCreated: false,
          });
        } else {
          res.json({
            status: true,
            message: "You are logged in!",
            token: token,
            isProfileCreated: true,
          });
        }
      } else {
        res.json({
          status: false,
          message: "Something went wrong processing your request!",
        });
      }
    }
  );
};

const signUpController = (req, res) => {
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;
  // check if email already exists
  // if not, create user and send verification email
  console.log(req.body);

  const graphqlReq = {
    query: VIEW_USER_BY_EMAIL,
    variables: {
      email: req.body.email,
    },
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": _hasuraAdminSecret,
      },
      url: _url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      // convert body to JSON
      const data = JSON.parse(body);
      console.log(data);

      if (data.data.User.length === 0) {
        // user account doesn't exist, create user
        createUser(req, res);
      } else {
        // user account exists already
        res.json({ status: false, message: "User already exists" });
      }
    }
  );
};

const createUser = async (req, res) => {
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const uuid = uuidv4();
  //Encrypt user password

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(req.body.password, salt);

  const graphqlReq = {
    query: CREATE_USER,
    variables: {
      objects: {
        id: uuid,
        email: req.body.email,
        role: "student",
        username: req.body.username,
        password: encryptedPassword,
        is_verified: true, // todo: change to false
      },
    },
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": _hasuraAdminSecret,
      },
      url: _url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      if (error) {
        res.json({ status: false, message: error });
        console.log(error);
      }
      if (body) {
        res.json({
          status: true,
          message: "Account created! You can now log in.",
        });
      }

      /*  // convert body to JSON
      const { data } = JSON.parse(body);
      res.json({ status: false, message: data }); */
    }
  );
};

export { signInController, signUpController };
