const app = require("./app.js");
const mongoose = require("mongoose");
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
  .then(() => console.log("DB conected successfuly"));

const port = process.env.PORT || 4000;
app.listen(port, console.log(`App runing on port ${port}`));
