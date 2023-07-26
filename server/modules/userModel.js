const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please tell us your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "please tell us your Last Name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    vallidate: [validator.isEmail, "Pleas provide yuor email"],
  },
  password: {
    type: String,
  },
  filesController: {
    type: Object,
    required: [true, "user must has files Controler "],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
