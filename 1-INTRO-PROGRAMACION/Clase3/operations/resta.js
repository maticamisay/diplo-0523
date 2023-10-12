const saludar = require("../saludar");

function resta(a, b) {
  saludar();
  let result = a - b;
  console.log(result);
}

module.exports = { resta };
