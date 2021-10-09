import Validator from "validatorjs";

const signupValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    email: "required|email",
    username: "required|string",
    password: "required|string|min:5|confirmed",
    password_confirmation: "required|string|min:5",
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
    password: "required|string|min:5",
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
    phone: "required|string|size:11",
    address: "required|string",
    designation: "required|string",
    class: "required|string",
    dob: "required|string",
    medium: "required|string",
    institution: "required|string",
  };

  let validation = new Validator(req.body, validationRule);

  validation.passes(() => {
    next();
  });

  validation.fails((err) => {
    const errors = [];
    errors.push(validation.errors.first("fullName"));
    errors.push(validation.errors.first("phone"));
    errors.push(validation.errors.first("address"));
    errors.push(validation.errors.first("designation"));
    errors.push(validation.errors.first("class"));
    errors.push(validation.errors.first("dob"));
    errors.push(validation.errors.first("institution"));
    errors.push(validation.errors.first("medium"));

    console.log(errors);

    res.status(412).send({
      success: false,
      message: "Validation failed. Please check your input!",
      data: errors,
    });
  });
};

const paymentValidation = (req, res, next) => {
  console.log(req.body);

  const validationRule = {
    transactionId: "required|string",
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
    const errors = [];
    errors.push(validation.errors.first("transactionId"));
    errors.push(validation.errors.first("phoneNumber"));
    errors.push(validation.errors.first("rawPrice"));
    errors.push(validation.errors.first("designation"));
    errors.push(validation.errors.first("discount"));
    errors.push(validation.errors.first("classId"));
    errors.push(validation.errors.first("paymentGateway"));

    console.log(errors);

    res.status(412).send({
      success: false,
      message: "Validation failed. Please check your input!",
      data: errors,
    });
  });
};
export {
  signupValidation,
  signInValidation,
  profileValidation,
  paymentValidation,
};
