const DAL_USER = require("../dal/dalUser");

const updateUserFilesCreated = (userFilse, title, id) => {
  const newFilesObj = userFilse;
  newFilesObj[title].created = true;
  DAL_USER.updatUserFiles(newFilesObj, id);
};

const calculateComplited = async (userFilse, answers, title, userId) => {
  const newFilesObj = userFilse;
  const notCoplitedTasks = answers.filter((a) => (a = a.length === 0));
  const value =
    (100 / answers.length) * (notCoplitedTasks.length - answers.length);
  newFilesObj[title].complited = Math.round(value) * -1;

  return await DAL_USER.updatUserFiles(newFilesObj, userId);
};
module.exports = { updateUserFilesCreated, calculateComplited };
