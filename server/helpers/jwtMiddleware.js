import { verify } from "jsonwebtoken";

/**
 * @function jwtMiddleware
 * @description Middleware to verify the JWT token
 * @param {Object} headers - must include x-studiac-access-token header
 */
const verifyToken = (req, res, next) => {
  const token = req.headers["x-studiac-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    console.log("decoded jwt from middleware: ");
    console.log(decoded);
    console.log("token verified!!");

    //req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
