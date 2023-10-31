function funcionDeclarada() {
  console.log("Hola soy una funcion declarada");
}
funcionDeclarada();

// ---------------------------- //

let funcionExpresada = function () {
  console.log("Hola soy una funcion expresada");
};
funcionExpresada();

// ---------------------------- //

function testAnonima(argumentoUno, argumentoDos, functionAnonima) {
  console.log("Hola soy una funcion anonima");
  functionAnonima(argumentoUno, argumentoDos);
}

testAnonima(1, 2, function (argumentoUno, argumentoDos) {
  console.log(argumentoUno - argumentoDos);
});

// ---------------------------- //

const functionFlechaMultiplicar = (a, b) => {
  let result = a + 5;
  return result * b;
};

funcionFlechaSumar = (a, b) => a + b;

const result = functionFlechaMultiplicar(1, 2);
console.log(result);
