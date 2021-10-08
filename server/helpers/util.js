import bcrypt from "bcryptjs";
import pkg from "jsonwebtoken";
const { jwt } = pkg;

const encryptPassword = async (password) => {
  //Encrypt user password
  const encryptedPassword = await bcrypt.hash(password, 10);
};

const createJwtToken = (user) => {
  const token = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export { encryptPassword, createJwtToken };
