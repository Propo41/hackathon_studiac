import pkg from "jsonwebtoken";
const { verify } = pkg;

/**
 * @function jwtMiddleware
 * @description Middleware to verify the JWT token
 * @param {Object} headers - must include x-studiac-access-token header
 */
const verifyToken = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  // split the token into two parts
  const [bearer, token] = bearerToken.split(" ");

  if (!token) {
    return res.status(403).send({
      status: false,
      message: "A token is required for authentication",
    });
  }
  try {
    const decoded = verify(token, process.env.JWT_SECRET);

    res.locals.userId =
      decoded["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
    res.locals.userRole =
      decoded["https://hasura.io/jwt/claims"]["x-hasura-default-role"];

    console.log("token verified!!");

    //req.user = decoded;
  } catch (err) {
    return res.status(401).send({
      status: false,
      message:
        "Unauthorized. Session may have expired or have been broken. Try logging in again.",
    });
  }
  return next();
};

export default verifyToken;
