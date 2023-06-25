const UserAnswers = require("../modules/userAnswers");
const asyncHandler = require("../utils/asyncHandler");
const BLL_CHA = require("../bll/getChapterDitals");
const BLL_UF = require("../bll/updatUserFils");
const AppError = require("../utils/appError");

exports.createChapter = asyncHandler(async (req, res, next) => {
  const title = req.params.title;
  const { content } = req.body;
  const userId = req.user.id;
  const uniqueFiled = title + userId;

  // 1)  CREATE FILE
  const file = await UserAnswers.create({
    title,
    content,
    userId,
    uniqueFiled,
  });

  // 2) if now file send error to client
  if (!file) {
    return next(
      new AppError(
        "for some reasen we cold not generat your file please try agine"
      )
    );
  }

  // UPDATE USER FILES CONTROLLER
  if (file) {
    BLL_UF.updateUserFilesCreated(req.user.filesController, title, userId);
  }

  // 3) SEND MESSAGE TO CLIENT
  res.status(201).json({
    status: "success",
    message: "file create successfuly",
    title,
  });
});

exports.UpdateChapter = asyncHandler(async (req, res, next) => {
  const { answers } = req.body;
  const userId = req.user.id;
  const chpterId = req.params.id;
  console.log(answers);

  const file = await UserAnswers.findByIdAndUpdate(chpterId, {
    content: answers.content,
  });

  // 1) CHECK IF FILE EXIST
  if (!file) {
    next(new AppError("file not found Try Agian"));
  }

  const user = await BLL_UF.calculateComplited(
    req.user.filesController,
    answers.content,
    answers.title,
    userId
  );

  if (file && user) {
    res.status(201).json({
      status: "success",
      message: ` ${answers.title} file saved successfuly`,
      title: file.title,
    });
  }
});

exports.getChapter = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const title = req.params.title;

  // 1 check if user hase chapterAnswers for this title
  const chapter = await BLL_CHA.getChapterDitals(userId, title);

  if (!chapter.instructions || !chapter.answers) {
    return next(new AppError("file not found"));
  }

  // 2) SEND CHAPTE TO CLIENT

  res.status(200).json({
    status: "success",
    data: {
      instructions: chapter.instructions,
      answers: chapter.answers,
      id: chapter.answers._id,
    },
  });
});
