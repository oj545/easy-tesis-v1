const User = require("../modules/userModel");
const AppError = require("../utils/appError");
const asyncHandler = require("../utils/asyncHandler");

// exports.updateMe = asyncHandler(async (req, res, next) => {
//   const _id = req.user.id;

//   console.log(id);
//   const user = await User.findByIdAndUpdate(_id, { filesController: req.body });
//   if (!user) {
//     next(new AppError("No user found with thid id"));
//   }
//   res.status(200).json({
//     status: "success",
//     data: user,
//   });
// });

exports.getMe = asyncHandler(async (req, res, next) => {
  const _id = req.user.id;

  // find user ditails
  const user = await User.findById({ _id });

  // if user not fund send errorr
  if (!user) {
    return next(
      new AppError("something want worng Please refresh your page", 400)
    );
  }

  // if evrything Ok send ditail to the client
  res.status(200).json({
    status: "success",
    data: user,
  });
});
