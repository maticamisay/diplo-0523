const fs = require("fs");
const path = require("path");

const writeFileJSON = (filePath, content) => {
  const routeFile = path.join(__dirname, "/..", "/db", filePath);
  const data = JSON.stringify(content, null, 2);

  fs.writeFileSync(routeFile, data);
};

const readFileJSON = (filePath) => {
  const routeFile = path.join(__dirname, "/..", "/db", filePath);
  const data = fs.readFileSync(routeFile, "utf8");
  const dataParsed = JSON.parse(data);

  return dataParsed;
};

module.exports = { writeFileJSON, readFileJSON };
