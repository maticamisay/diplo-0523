const sumarDosValores = require("./operations/sumar");
const { division, segundaFuncion } = require("./operations/division-1");
const divisionDos = require("./operations/division-2");

const result = sumarDosValores(1, 2);
const resultDivision = division(10, 0);
segundaFuncion();
const resultSecondDivision = divisionDos(10, 3);

console.log("primer resultado: " + resultDivision);
console.log("=====================");
console.log("segundo resultado: " + resultSecondDivision);
