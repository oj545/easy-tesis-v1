const AppError = require("../utils/appError");
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `${value} this Email is alredy exist. please try another Email Address!`;
  return new AppError(message, 400);
};

const handleValidationError = (err) => {
  const message = `Invalid input data. ${err}`;
  return new AppError(message, 400);
};

const handelJWTExpiredError = () =>
  new AppError("your toket hse expiered! please log in agine.", 401);

const handelJWTError = () =>
  new AppError("invalid token. Please log in  agine!", 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sentErrorProduction = (err, res) => {
  // operational , trused error: send to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // 1) Log error

    // 2) Send genric message
    res.status(500).json({
      status: "error",
      message: "SomeThing want very worng!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    console.log(err);
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;

    if (err.name === "CastError") err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDuplicateFieldsDB(err);
    if (err.name === "validationError") {
      err = handleValidationError(err);
    }

    if (err.name === "JsonWebTokenError") err = handelJWTError();
    if (err.name === "TokenExpiredError") err = handelJWTExpiredError();
    sentErrorProduction(err, res);
  }
};
