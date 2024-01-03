const fs = require("fs");
const path = require("path");

const writeJSONFile = (filename, content) => {
  fs.writeFileSync(
    path.join(__dirname, "..", "db", filename),
    JSON.stringify(content),
    "utf8"
  );
};

const readJSONFile = (filename) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "db", filename), "utf8")
  );
};

module.exports = {
  writeJSONFile,
  readJSONFile,
};
