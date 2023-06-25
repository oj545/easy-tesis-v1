const bll_HTML = require("../bll/bllHtml");
const path = require("path");
const AppError = require("../utils/appError");

exports.getCheckLiset = async (req, res, next) => {
  const titles = req.query.title.split(",");
  const userId = req.params.id;

  const html = await bll_HTML.renderHtml(titles, userId);
  if (!html) {
    return next(new AppError("culd not generate DOCOMENT try Agine", 400));
  }

  res.status(200).json({
    status: "success",
    html: html,
  });
};
