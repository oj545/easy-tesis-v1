const jsonfile = require("jsonfile");
const asyncHandler = require("../utils/asyncHandler");

const getInstruction = async () => {
  const instructions = await jsonfile.readFile("data/InstructionData.json");
  return instructions;
};

module.exports = { getInstruction };
