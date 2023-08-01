const DAL_HTML = require("../dal/dalHtmlTemplet");
const DAL_ANS = require("../dal/dalAnswers");
const replacer = require("../helperFunctions/replacer");

const renderHtml = async (titles, userId) => {
  const htmlTemplet = DAL_HTML.getHtmlTemplet();

  const answers = await DAL_ANS.findManyAnswers(userId, titles);
  const htmlStr = replacer(answers, htmlTemplet);

  return htmlStr;
};
module.exports = { renderHtml };
