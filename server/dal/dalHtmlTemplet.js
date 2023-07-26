const fs = require("fs");

const getHtmlTemplet = () => {
  const htmlStr = fs.readFileSync("./pablic/templet.html", "utf-8");
  return htmlStr;
};
module.exports = { getHtmlTemplet };
