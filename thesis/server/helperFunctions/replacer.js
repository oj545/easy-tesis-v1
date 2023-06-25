const replaceTemplet = (templet, contents) => {
  let output = templet;

  for (const el of contents) {
    if (output.includes(`%${el.title}%`)) {
      output = output.replace(`{%${el.title}%}`, el.content || "");
    }
  }
  output = output.replace(/{%title%}/, "");
  output = output.replace(/{%acknowledgment%}/, "");
  output = output.replace(/{%summery%}/, "");
  output = output.replace(/{%introduction%}/, "");
  output = output.replace(/{%material%}/, "");
  output = output.replace(/{%results%}/, "");
  output = output.replace(/{%discussion%}/, "");
  output = output.replace(/{%conclusions%}/, "");
  output = output.replace(/{%biography%}/, "");
  return output;
};

const replacer = (answers, templet) => {
  let output = templet;
  const contents = answers.map((el) => {
    return {
      title: el.title,
      content: el.content.reduce((acc, text) => {
        return acc + text;
      }, ""),
    };
  });

  output = replaceTemplet(templet, contents);

  return output;
};
module.exports = replacer;
