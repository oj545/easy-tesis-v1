const mongoose = require("mongoose");

const instructionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  generalDescription: {
    type: String,
  },
  instructions: {
    type: [{ description: { type: String }, sentenceBank: { type: Array } }],
  },
});

const Instruction = mongoose.model("instructions", instructionSchema);
module.exports = Instruction;
