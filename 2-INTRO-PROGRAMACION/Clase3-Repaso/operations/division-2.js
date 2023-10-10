function division(a, b) {
  console.log("soy la opcion 2");
  if (b === 0) {
    return "no se puede dividir por 0";
  }
  return a / b;
}

module.exports = division;
