const User = require("../modules/userModel");
const asyncHandler = require("../utils/asyncHandler");

const updatUserFiles = asyncHandler(async (body, userId) => {
  const userFilse = await User.findByIdAndUpdate(userId, {
    filesController: body,
  });
  return userFilse;
});

module.exports = { updatUserFiles };
