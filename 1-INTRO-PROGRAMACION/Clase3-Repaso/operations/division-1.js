function division(a, b) {
  console.log("soy la opcion 1");
  if (b !== 0) {
    return a / b;
  }
  return "no se puede dividir por 0";
}

function segundaFuncion() {
  console.log("hola jaja");
}

module.exports = { division, segundaFuncion };
