const fs = require("fs");

function write(data) {
  let dataStringified = JSON.stringify(data, null, 2);
  fs.writeFileSync("./data.json", dataStringified);
}

module.exports = write;
