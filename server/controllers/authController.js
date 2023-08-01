const Jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/appError");
const bcrypt = require("bcrypt");
const User = require("../modules/userModel");

const generateToke = (id) => {
  console.log(process.env.JWT_SECRET);
  return Jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const creatAndSendToken = (user, statusCode, message, req, res) => {
  const token = generateToke(user.id);
  // remove password
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    message,
    data: user,
  });
};

exports.signup = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    filesController,
  } = req.body.signup;

  //1) confirm passwords
  const comperPasswords = password === passwordConfirm;
  if (!comperPasswords) {
    return next(new AppError("Password are not the same", 401));
  }
  //2) hash the password
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  //3) create user
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    filesController,
  });

  if (!newUser) {
    return next(
      AppError("for some reson we culde not create your user try agine", 401)
    );
  }

  //4) send token and user details
  creatAndSendToken(
    newUser,
    201,
    "your registeration completed Successfuly",
    req,
    res
  );
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  // 1) chack if ther is email and password
  if (!email || !password)
    return next(new AppError("Pleas provid email and password", 400));

  // 2) find user
  const user = await User.findOne({ email });

  // 3) if user not found send error
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 4) send tolken and user details
  creatAndSendToken(user, 200, "Login process completed Successfuly", req, res);
});
