import request from "request";
import {
  CREATE_USER_PROFILE,
  SUBSCRIBE_TO_CLASS,
} from "../graphql/mutations.js";
import {
  GET_ENROLLMENT_DATE,
  GET_STUDENT_CHAPTERS,
} from "../graphql/queries.js";
import { getNumberOfChaptersToRelease } from "../helpers/util.js";
/*
 * deals with the following: createProfile, paymentPage, getChapters, getLessons
 */

const createProfileController = async (req, res) => {
  console.log(req.body);

  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const profile = req.body;

  // generate a random integer
  const randomInt = Math.floor(Math.random() * 100000);

  const graphqlReq = {
    query: CREATE_USER_PROFILE,
    variables: {
      profile: {
        full_name: profile.fullName,
        address: profile.address,
        class: profile.class,
        designation: profile.designation,
        dob: profile.dob,
        institution: profile.institution,
        medium: profile.medium,
        phone: profile.phone,
        profile_picture_url: `https://avatars.dicebear.com/api/avataaars/${
          randomInt % 100
        }.svg`,
      },
    },
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        Authorization: req.headers.authorization,
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
        console.log(body);
        res.json({ status: true, message: "Profile updated successfully!" });
      } else {
        res.json({
          status: false,
          message: "Someting went wrong. Try refreshing!",
        });
      }
    }
  );
};

const paymentController = (req, res) => {
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const payment = req.body;

  // generate a random integer
  const graphqlReq = {
    query: SUBSCRIBE_TO_CLASS,
    variables: {
      object: {
        class_id: payment.classId,
        discount: payment.discount,
        raw_price: payment.rawPrice,
        total: payment.rawPrice - payment.discount,
        Payment: {
          data: {
            payment_gateway: payment.paymentGateway,
            phone_number: payment.phoneNumber,
            transaction_id: payment.transactionId,
          },
        },
      },
    },
  };

  request.post(
    {
      headers: {
        "content-type": "application/json",
        Authorization: req.headers.authorization,
      },
      url: _url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      if (error) {
        res.json({ status: false, message: JSON.parse(error) });
      }
      if (body) {
        const data = JSON.parse(body);
        if (data.errors && data.errors.length > 0) {
          res.json({
            status: false,
            message:
              "You have already made a request. Please wait for us to approve your request.",
          });
        } else {
          res.json({
            status: true,
            message:
              "We have received your request. You will be notified once we verify your credentials. Thank you for being with us!",
          });
        }
      }
    }
  );
};

const getChaptersController = (req, res) => {
  /*  await bcrypt.compare(password, user.password) */
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const userId = res.locals.userId;
  console.log("userid: ", userId);

  console.log("subjectid: ", req.body.subjectId);
  const graphqlReq = {
    query: GET_ENROLLMENT_DATE,
    variables: {
      userId: userId,
      subjectId: req.body.subjectId,
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
        const data = JSON.parse(body);
        console.log(data);

        if (data.errors && data.errors.length > 0) {
          res.json({
            status: false,
            message: data.errors[0].message,
          });
        } else {
          if (data.data.Enrollment.length > 0) {
            console.log(data.data.Enrollment[0]);

            const result = getNumberOfChaptersToRelease(
              data.data.Enrollment[0].subscription_date
            );

            returnAvailableChapters(
              result.numOfChaptersToRelease,
              result.nextChapterIn,
              req.body.subjectId,
              res
            );
          } else {
            res.json({
              status: false,
              message: "Unexpected!! No Enrollment found",
            });
          }
        }
      }
    }
  );
};

const returnAvailableChapters = (
  chaptersToRelease,
  nextChapterIn,
  subjectId,
  res
) => {
  /*  await bcrypt.compare(password, user.password) */
  const _hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
  const _url = process.env.HASURA_GRAPHQL_ENDPOINT;

  const graphqlReq = {
    query: GET_STUDENT_CHAPTERS,
    variables: {
      limit: chaptersToRelease,
      subjectId: subjectId,
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
        data.Subject[0].nextChapterIn = nextChapterIn;
        res.json(data);
        console.log(data);
      }
    }
  );
};

const getLessonsController = (req, res) => {};

export {
  createProfileController,
  paymentController,
  getChaptersController,
  getLessonsController,
};
