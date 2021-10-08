import Validator from "validatorjs";

const signupValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    email: "required|email",
    username: "required|string",
    password: "required|string|min:6|confirmed",
    password_confirmation: "required|string|min:6",
  };

  let validation = new Validator(req.body, validationRule);

  validation.passes(() => {
    next();
  });

  validation.fails((err) => {
    res.status(412).send({
      success: false,
      message: "Validation failed. Please check your input!",
      data: err,
    });
  });

  validation.errors.first("email"); // 'The email format is invalid.'
  validation.errors.first("username"); // 'The email format is invalid.'
  validation.errors.first("password"); // 'The email format is invalid.'
};

const signInValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    email: "required|email",
    password: "required|string|min:6",
  };

  let validation = new Validator(req.body, validationRule);

  validation.passes(() => {
    next();
  });

  validation.fails((err) => {
    res.status(412).send({
      success: false,
      message: "Validation failed. Please check your input!",
      data: err,
    });
  });
};

export { signupValidation, signInValidation };
