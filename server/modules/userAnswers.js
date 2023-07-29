const mongoose = require("mongoose");

const UserAnswersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "chapter content must have name"],
    enum: [
      "title",
      "acknowledgment",
      "summery",
      "introduction",
      "material",
      "results",
      "discussion",
      "conclusions",
      "bibliography",
    ],
  },
  content: {
    type: [String],
  },
  uniqueFiled: {
    type: String,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "chapter content must have user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// userSchema.methods.updateUserFilesController = function (next,  title userId,) {
//   const user = thid.findByIdAndUpdate();

//   next(user);
// };

const UserAnswers = mongoose.model("UserAnswers", UserAnswersSchema);
module.exports = UserAnswers;
