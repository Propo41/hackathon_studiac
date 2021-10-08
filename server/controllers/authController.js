/*
 * deals with authentication: sign in and sign up
 */
import { v4 as uuidv4 } from "uuid";
import request from "request";
import { VIEW_USER_BY_EMAIL } from "../graphql/queries.js";

const signInController = (req, res) => {
  /*  await bcrypt.compare(password, user.password) */
};

const signUpController = (req, res) => {
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  console.log(req.body);

  const graphqlReq = {
    query: VIEW_USER_BY_EMAIL,
    variables: {
      email: "admin@aust.com",
      role: "student",
    },
  };

  const uuid = uuidv4();
  // print uuid
  console.log(uuid);

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
      const { data } = JSON.parse(body);
      console.log(data);
      res.json(data);
    }
  );
};

export { signInController, signUpController };
