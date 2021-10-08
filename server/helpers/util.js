import jwt from "jsonwebtoken";
import pkg from "jsonwebtoken";
const { verify } = pkg;

const createJwtToken = (user) => {
  const token = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["student", "admin", "guest"],
        "x-hasura-default-role": user.role,
        "x-hasura-user-id": user.id,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

const sendEmail = async (email, subject, text) => {
  // TODO: Send email
};

const getNumberOfChaptersToRelease = (enrollmentDate) => {
  var enrollmentTime = Date.parse(enrollmentDate);
  var currentTime = Date.now();
  console.log(currentTime);
  console.log(enrollmentTime);

  const diff = Math.abs(currentTime - enrollmentTime);
  // 7 days
  const daysSpentSinceEnrollment = Math.round(diff / (1000 * 60 * 60 * 24));
  console.log(daysSpentSinceEnrollment + " days spent");
  console.log(
    "total chapters released: ",
    Math.round(daysSpentSinceEnrollment / 7) + 1
  );
  return Math.round(daysSpentSinceEnrollment / 7) + 1;
};

export { createJwtToken, getNumberOfChaptersToRelease };
