const fs = require("fs");
const mongoose = require("mongoose");
const Instruction = require("../modules/instructionsModel");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const instructions = JSON.parse(
  fs.readFileSync(`${__dirname}/InstructionData.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Instruction.create(instructions);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Instruction.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
