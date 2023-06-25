const UserAnswers = require("../modules/userAnswers");
const asyncHandler = require("../utils/asyncHandler");

const findUserAnswers = asyncHandler(async (userId, title) => {
  const file = await UserAnswers.findOne({
    $and: [{ userId: { $eq: userId } }, { title: { $eq: title } }],
  });
  console.log(file);
  return file;
});

const findManyAnswers = asyncHandler(async (userId, arr) => {
  const files = await UserAnswers.find({
    $and: [
      {
        userId: userId,
        title: { $in: [...arr] },
      },
    ],
  }).select(["content", "title"]);
  return files;
});

module.exports = { findUserAnswers, findManyAnswers };
