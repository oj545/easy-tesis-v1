const jwt = require("jsonwebtoken");
const User = require("../modules/userModel");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/appError");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  // 1) GET THE TOKET AND CHECK IF ITS THER
  if (
    req.headers.authorizaton &&
    req.headers.authorizaton.startsWith("Bearer")
  ) {
    token = req.headers.authorizaton.split(" ")[1];
  }

  if (!token) {
    next(new AppError("yor not loged in please log in to get Acssecc", 401));
  }

  // 2) VRIFICATION TOKEN
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // 3) CHECK IF USER EXIST
  const currentUser = await User.findOne({ _id: decoded.id });
  if (!currentUser) {
    next(new AppError("the user belongin to this user no longer exist "));
  }

  // 4) GENARAT ACCESS TO POTECTED ROUTS
  req.user = currentUser;
  next();
});
