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

const profileValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    fullName: "required|string",
    phone: "required|size|max:11",
    address: "required|string",
    designation: "required|string",
    class: "required|string",
    dob: "required|date",
    medium: "required|string",
    institution: "required|string",
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

const paymentValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    transactionId: "required|string|min:6",
    phoneNumber: "required|string|size:11",
    rawPrice: "required|integer",
    discount: "required|integer",
    classId: "required|integer",
    paymentGateway: "required|string",
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
export {
  signupValidation,
  signInValidation,
  profileValidation,
  paymentValidation,
};
