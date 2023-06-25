const DAL_INS = require("../dal/getInstruction");
const DAL_ANS = require("../dal/dalAnswers");
const asyncHandler = require("../utils/asyncHandler");

const getChapterDitals = asyncHandler(async (userId, title) => {
  const file = await DAL_ANS.findUserAnswers(userId, title);
  const instructions = await DAL_INS.getInstruction();
  const chapterInstructions = instructions.find((item) => item.title === title);

  return { instructions: chapterInstructions, answers: file };
});

module.exports = { getChapterDitals };
